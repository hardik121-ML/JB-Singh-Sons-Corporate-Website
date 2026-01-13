const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';

const pages = [
  { name: 'Homepage', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Freight Forwarding', path: '/services/freight-forwarding' },
  { name: 'Custom Clearance', path: '/services/custom-clearance' },
  { name: 'Marine Logistics', path: '/services/marine-logistics' },
  { name: 'Transportation', path: '/services/transportation' },
  { name: 'Equipment Hire', path: '/services/equipment-hire' },
  { name: 'Warehousing', path: '/services/warehousing-distribution' },
  { name: 'Domestic Express', path: '/services/domestic-express' },
  { name: 'Cross Trade', path: '/services/cross-trade-services' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
  { name: 'Terms', path: '/terms-and-conditions' },
  { name: 'Privacy', path: '/privacy-policy' }
];

async function runTests() {
  console.log('🚀 Starting Pre-Publish Test\n');
  console.log('='.repeat(60));

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ],
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    });
  } catch (err) {
    console.log('⚠️  Could not launch Chrome, trying default...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }

  const results = {
    passed: 0,
    failed: 0,
    details: []
  };

  for (const pageInfo of pages) {
    const page = await browser.newPage();
    const url = `${BASE_URL}${pageInfo.path}`;

    console.log(`\n📄 ${pageInfo.name} (${pageInfo.path})`);

    const pageResult = {
      name: pageInfo.name,
      url: url,
      status: 'unknown',
      issues: []
    };

    try {
      // Navigate
      const response = await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      const statusCode = response.status();
      console.log(`   Status: ${statusCode}`);

      if (!response.ok()) {
        pageResult.issues.push(`HTTP ${statusCode}`);
        pageResult.status = 'failed';
        results.failed++;
      } else {
        // Wait for content
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Check for console errors
        const errors = [];
        page.on('console', msg => {
          if (msg.type() === 'error') errors.push(msg.text());
        });

        // Check SEO
        const seo = await page.evaluate(() => ({
          title: document.title,
          description: document.querySelector('meta[name="description"]')?.content,
          hasH1: document.querySelectorAll('h1').length > 0
        }));

        console.log(`   Title: ${seo.title || 'MISSING'}`);
        console.log(`   Description: ${seo.description ? 'Yes' : 'MISSING'}`);

        if (!seo.title) pageResult.issues.push('Missing title');
        if (!seo.description) pageResult.issues.push('Missing meta description');

        // Check images
        const imageStats = await page.evaluate(() => {
          const imgs = Array.from(document.querySelectorAll('img'));
          return {
            total: imgs.length,
            loaded: imgs.filter(img => img.complete && img.naturalHeight > 0).length,
            webp: imgs.filter(img => img.src.includes('.webp')).length
          };
        });

        console.log(`   Images: ${imageStats.loaded}/${imageStats.total} loaded (${imageStats.webp} WebP)`);

        if (imageStats.loaded < imageStats.total) {
          pageResult.issues.push(`${imageStats.total - imageStats.loaded} images failed to load`);
        }

        // Check videos
        const videoStats = await page.evaluate(() => {
          const videos = Array.from(document.querySelectorAll('video'));
          const sources = Array.from(document.querySelectorAll('video source'));
          return {
            total: videos.length,
            webm: sources.filter(s => s.type === 'video/webm').length,
            mp4: sources.filter(s => s.type === 'video/mp4').length
          };
        });

        if (videoStats.total > 0) {
          console.log(`   Videos: ${videoStats.total} found (${videoStats.webm} WebM, ${videoStats.mp4} MP4)`);
        }

        // Check links
        const linkCount = await page.evaluate(() => {
          return document.querySelectorAll('a').length;
        });

        console.log(`   Links: ${linkCount} found`);

        if (pageResult.issues.length === 0) {
          pageResult.status = 'passed';
          results.passed++;
          console.log(`   ✅ PASSED`);
        } else {
          pageResult.status = 'failed';
          results.failed++;
          console.log(`   ❌ FAILED: ${pageResult.issues.join(', ')}`);
        }
      }
    } catch (error) {
      pageResult.status = 'error';
      pageResult.issues.push(error.message);
      results.failed++;
      console.log(`   ❌ ERROR: ${error.message}`);
    }

    results.details.push(pageResult);
    await page.close();
  }

  await browser.close();

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Passed: ${results.passed}/${pages.length}`);
  console.log(`❌ Failed: ${results.failed}/${pages.length}`);

  if (results.failed > 0) {
    console.log('\n❌ FAILED PAGES:');
    results.details.filter(p => p.status !== 'passed').forEach(p => {
      console.log(`  ${p.name}: ${p.issues.join(', ')}`);
    });
  }

  console.log('\n' + '='.repeat(60));
  if (results.failed === 0) {
    console.log('✅ ALL TESTS PASSED! Ready to publish! 🚀');
  } else {
    console.log('⚠️  Some issues found. Review above.');
  }
  console.log('='.repeat(60));

  // Save report
  fs.writeFileSync(
    path.join(__dirname, 'test-report.json'),
    JSON.stringify(results, null, 2)
  );
  console.log('\n📝 Report saved to test-report.json');

  process.exit(results.failed > 0 ? 1 : 0);
}

runTests().catch(err => {
  console.error('❌ Test failed:', err.message);
  process.exit(1);
});
