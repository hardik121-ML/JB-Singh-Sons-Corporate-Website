const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Comprehensive pre-publish test
const BASE_URL = 'http://localhost:3000';

const pages = [
  { name: 'Homepage', path: '/', hasVideo: true, hasImages: true },
  { name: 'About', path: '/about', hasVideo: true, hasImages: false },
  { name: 'Services', path: '/services', hasVideo: false, hasImages: false },
  { name: 'Freight Forwarding', path: '/services/freight-forwarding', hasVideo: true, hasImages: true },
  { name: 'Custom Clearance', path: '/services/custom-clearance', hasVideo: true, hasImages: true },
  { name: 'Marine Logistics', path: '/services/marine-logistics', hasVideo: false, hasImages: true },
  { name: 'Transportation', path: '/services/transportation', hasVideo: true, hasImages: true },
  { name: 'Equipment Hire', path: '/services/equipment-hire', hasVideo: true, hasImages: true },
  { name: 'Warehousing', path: '/services/warehousing-distribution', hasVideo: true, hasImages: true },
  { name: 'Domestic Express', path: '/services/domestic-express', hasVideo: true, hasImages: true },
  { name: 'Cross Trade', path: '/services/cross-trade-services', hasVideo: true, hasImages: true },
  { name: 'Solutions', path: '/solutions', hasVideo: false, hasImages: true },
  { name: 'Careers', path: '/careers', hasVideo: false, hasImages: false },
  { name: 'Contact', path: '/contact', hasVideo: false, hasImages: false },
  { name: 'Terms', path: '/terms-and-conditions', hasVideo: false, hasImages: false },
  { name: 'Privacy', path: '/privacy-policy', hasVideo: false, hasImages: false }
];

const results = {
  passed: [],
  failed: [],
  warnings: [],
  mediaCheck: {
    webpImages: [],
    webmVideos: [],
    mp4Fallbacks: [],
    missingMedia: []
  }
};

async function testPage(browser, pageInfo) {
  const page = await browser.newPage();
  const url = `${BASE_URL}${pageInfo.path}`;

  console.log(`\n📄 Testing: ${pageInfo.name} (${pageInfo.path})`);

  const pageResults = {
    name: pageInfo.name,
    url: url,
    loaded: false,
    statusCode: null,
    consoleErrors: [],
    images: { total: 0, loaded: 0, failed: [] },
    videos: { total: 0, loaded: 0, failed: [] },
    links: { total: 0, broken: [] },
    seo: {}
  };

  // Capture console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      pageResults.consoleErrors.push(msg.text());
    }
  });

  // Capture failed requests
  const failedRequests = [];
  page.on('requestfailed', request => {
    failedRequests.push({
      url: request.url(),
      method: request.method(),
      failure: request.failure()
    });
  });

  try {
    // Navigate to page
    const response = await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    pageResults.statusCode = response.status();
    pageResults.loaded = response.ok();

    if (!response.ok()) {
      pageResults.error = `HTTP ${response.status()}`;
      results.failed.push(pageResults);
      await page.close();
      return pageResults;
    }

    // Wait a bit for dynamic content
    await page.waitForTimeout(2000);

    // Check SEO metadata
    pageResults.seo = await page.evaluate(() => {
      return {
        title: document.title || 'Missing',
        metaDescription: document.querySelector('meta[name="description"]')?.content || 'Missing',
        ogTitle: document.querySelector('meta[property="og:title"]')?.content || 'Missing',
        ogDescription: document.querySelector('meta[property="og:description"]')?.content || 'Missing',
        canonical: document.querySelector('link[rel="canonical"]')?.href || 'Missing'
      };
    });

    // Check images
    const images = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.map(img => ({
        src: img.src,
        complete: img.complete,
        naturalHeight: img.naturalHeight,
        alt: img.alt
      }));
    });

    pageResults.images.total = images.length;
    images.forEach(img => {
      if (img.complete && img.naturalHeight > 0) {
        pageResults.images.loaded++;
        // Track WebP usage
        if (img.src.includes('.webp')) {
          results.mediaCheck.webpImages.push({ page: pageInfo.name, url: img.src });
        }
      } else {
        pageResults.images.failed.push(img.src);
      }
    });

    // Check videos
    const videos = await page.evaluate(() => {
      const vids = Array.from(document.querySelectorAll('video'));
      return vids.map(vid => ({
        sources: Array.from(vid.querySelectorAll('source')).map(s => ({
          src: s.src,
          type: s.type
        })),
        readyState: vid.readyState
      }));
    });

    pageResults.videos.total = videos.length;
    videos.forEach(vid => {
      if (vid.readyState >= 2) {
        pageResults.videos.loaded++;
      }

      // Track video formats
      vid.sources.forEach(source => {
        if (source.type === 'video/webm') {
          results.mediaCheck.webmVideos.push({ page: pageInfo.name, url: source.src });
        }
        if (source.type === 'video/mp4') {
          results.mediaCheck.mp4Fallbacks.push({ page: pageInfo.name, url: source.src });
        }
      });

      if (vid.readyState < 2) {
        pageResults.videos.failed.push(vid.sources[0]?.src || 'unknown');
      }
    });

    // Check internal links
    const links = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll('a[href^="/"], a[href^="http://localhost"], a[href^="#"]'));
      return anchors.map(a => a.href);
    });

    pageResults.links.total = links.length;

    // Add failed requests to results
    if (failedRequests.length > 0) {
      pageResults.failedRequests = failedRequests;
      results.warnings.push({
        page: pageInfo.name,
        message: `${failedRequests.length} failed requests`,
        details: failedRequests
      });
    }

    // Determine pass/fail
    const hasErrors =
      pageResults.consoleErrors.length > 0 ||
      pageResults.images.failed.length > 0 ||
      pageResults.videos.failed.length > 0 ||
      !pageResults.seo.title ||
      !pageResults.seo.metaDescription;

    if (hasErrors) {
      results.failed.push(pageResults);
    } else {
      results.passed.push(pageResults);
    }

    // Log results
    console.log(`  ✓ Status: ${pageResults.statusCode}`);
    console.log(`  ✓ Images: ${pageResults.images.loaded}/${pageResults.images.total} loaded`);
    if (pageResults.images.failed.length > 0) {
      console.log(`  ✗ Failed images: ${pageResults.images.failed.length}`);
    }
    console.log(`  ✓ Videos: ${pageResults.videos.loaded}/${pageResults.videos.total} loaded`);
    if (pageResults.videos.failed.length > 0) {
      console.log(`  ✗ Failed videos: ${pageResults.videos.failed.length}`);
    }
    console.log(`  ✓ Links: ${pageResults.links.total} found`);
    console.log(`  ✓ Title: ${pageResults.seo.title}`);
    console.log(`  ✓ Console errors: ${pageResults.consoleErrors.length}`);

  } catch (error) {
    pageResults.error = error.message;
    results.failed.push(pageResults);
    console.log(`  ✗ Error: ${error.message}`);
  }

  await page.close();
  return pageResults;
}

async function runTests() {
  console.log('🚀 Starting Pre-Publish Comprehensive Test\n');
  console.log('=' .repeat(60));

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // Test all pages
  for (const pageInfo of pages) {
    await testPage(browser, pageInfo);
  }

  await browser.close();

  // Generate report
  console.log('\n' + '='.repeat(60));
  console.log('📊 TEST SUMMARY');
  console.log('='.repeat(60));

  console.log(`\n✅ Passed: ${results.passed.length}/${pages.length} pages`);
  console.log(`❌ Failed: ${results.failed.length}/${pages.length} pages`);
  console.log(`⚠️  Warnings: ${results.warnings.length}`);

  // Media optimization check
  console.log('\n📸 MEDIA OPTIMIZATION CHECK:');
  console.log(`  WebP Images Used: ${results.mediaCheck.webpImages.length}`);
  console.log(`  WebM Videos Used: ${results.mediaCheck.webmVideos.length}`);
  console.log(`  MP4 Fallbacks: ${results.mediaCheck.mp4Fallbacks.length}`);

  // List failed pages
  if (results.failed.length > 0) {
    console.log('\n❌ FAILED PAGES:');
    results.failed.forEach(page => {
      console.log(`\n  ${page.name} (${page.url})`);
      if (page.error) console.log(`    Error: ${page.error}`);
      if (page.consoleErrors.length > 0) {
        console.log(`    Console Errors: ${page.consoleErrors.length}`);
        page.consoleErrors.forEach(err => console.log(`      - ${err}`));
      }
      if (page.images.failed.length > 0) {
        console.log(`    Failed Images: ${page.images.failed.length}`);
        page.images.failed.slice(0, 3).forEach(img => console.log(`      - ${img}`));
      }
      if (page.videos.failed.length > 0) {
        console.log(`    Failed Videos: ${page.videos.failed.length}`);
        page.videos.failed.forEach(vid => console.log(`      - ${vid}`));
      }
      if (!page.seo.title || page.seo.title === 'Missing') {
        console.log(`    SEO: Missing title`);
      }
      if (!page.seo.metaDescription || page.seo.metaDescription === 'Missing') {
        console.log(`    SEO: Missing meta description`);
      }
    });
  }

  // Warnings
  if (results.warnings.length > 0) {
    console.log('\n⚠️  WARNINGS:');
    results.warnings.forEach(warning => {
      console.log(`  ${warning.page}: ${warning.message}`);
    });
  }

  // SEO Check
  console.log('\n🔍 SEO CHECK:');
  const seoIssues = results.passed.concat(results.failed).filter(page =>
    !page.seo.title ||
    !page.seo.metaDescription ||
    page.seo.title === 'Missing' ||
    page.seo.metaDescription === 'Missing'
  );

  if (seoIssues.length === 0) {
    console.log('  ✅ All pages have proper SEO metadata');
  } else {
    console.log(`  ⚠️  ${seoIssues.length} pages missing SEO data:`);
    seoIssues.forEach(page => {
      console.log(`    - ${page.name}`);
    });
  }

  // Final verdict
  console.log('\n' + '='.repeat(60));
  if (results.failed.length === 0) {
    console.log('✅ ALL TESTS PASSED! Website is ready to publish! 🚀');
  } else {
    console.log('❌ SOME TESTS FAILED. Please fix issues before publishing.');
  }
  console.log('='.repeat(60));

  // Save detailed report
  const reportPath = path.join(__dirname, 'pre-publish-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📝 Detailed report saved to: ${reportPath}`);

  process.exit(results.failed.length > 0 ? 1 : 0);
}

// Run tests
runTests().catch(error => {
  console.error('❌ Test suite failed:', error);
  process.exit(1);
});
