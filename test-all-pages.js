const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Ensure screenshots directory exists
const screenshotsDir = path.join(__dirname, 'screenshots', 'full-test');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const pages = [
  { name: 'homepage', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'services', path: '/services' },
  { name: 'freight-forwarding', path: '/services/freight-forwarding' },
  { name: 'custom-clearance', path: '/services/custom-clearance' },
  { name: 'marine-logistics', path: '/services/marine-logistics' },
  { name: 'transportation', path: '/services/transportation' },
  { name: 'equipment-hire', path: '/services/equipment-hire' },
  { name: 'warehousing-distribution', path: '/services/warehousing-distribution' },
  { name: 'domestic-express', path: '/services/domestic-express' },
  { name: 'cross-trade-services', path: '/services/cross-trade-services' },
  { name: 'solutions', path: '/solutions' },
  { name: 'careers', path: '/careers' },
  { name: 'contact', path: '/contact' },
  { name: 'terms', path: '/terms-and-conditions' },
  { name: 'privacy', path: '/privacy-policy' }
];

const viewports = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'mobile', width: 375, height: 667 }
];

const scrollPositions = [0, 50, 100];

async function testAllPages() {
  console.log('🚀 Starting comprehensive website testing...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const issues = [];

  // Test each page
  for (const pageInfo of pages) {
    console.log(`📄 Testing ${pageInfo.name} (${pageInfo.path}):`);

    for (const viewport of viewports) {
      await page.setViewport(viewport);

      try {
        await page.goto(`http://localhost:3000${pageInfo.path}`, {
          waitUntil: 'networkidle0',
          timeout: 30000
        });

        // Get page height
        const pageHeight = await page.evaluate(() => document.body.scrollHeight);

        // Take screenshots at different scroll positions
        for (const position of scrollPositions) {
          const scrollY = Math.floor((pageHeight * position) / 100);
          await page.evaluate((y) => window.scrollTo(0, y), scrollY);
          await new Promise(r => setTimeout(r, 500)); // Wait for scroll animations

          const filename = `${pageInfo.name}_${viewport.name}_${position}pct.png`;
          await page.screenshot({
            path: path.join(screenshotsDir, filename),
            fullPage: false
          });
          console.log(`  ✅ ${viewport.name} at ${position}% scroll`);
        }

        // Check for console errors
        page.on('console', msg => {
          if (msg.type() === 'error') {
            issues.push({
              page: pageInfo.name,
              viewport: viewport.name,
              type: 'console-error',
              message: msg.text()
            });
          }
        });

        // Check for broken images
        const brokenImages = await page.evaluate(() => {
          const images = Array.from(document.images);
          return images
            .filter(img => !img.complete || img.naturalHeight === 0)
            .map(img => img.src);
        });

        if (brokenImages.length > 0) {
          issues.push({
            page: pageInfo.name,
            viewport: viewport.name,
            type: 'broken-images',
            images: brokenImages
          });
        }

        // Check for layout issues (elements outside viewport)
        const overflowElements = await page.evaluate(() => {
          const elements = document.querySelectorAll('*');
          const overflowing = [];
          const vw = window.innerWidth;

          elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.right > vw || rect.left < 0) {
              const styles = window.getComputedStyle(el);
              if (styles.overflow !== 'hidden' && styles.position !== 'fixed') {
                overflowing.push({
                  tag: el.tagName,
                  class: el.className,
                  rect: { left: rect.left, right: rect.right, width: rect.width }
                });
              }
            }
          });

          return overflowing.slice(0, 5); // Limit to first 5 issues
        });

        if (overflowElements.length > 0) {
          issues.push({
            page: pageInfo.name,
            viewport: viewport.name,
            type: 'overflow',
            elements: overflowElements
          });
        }

      } catch (error) {
        console.log(`  ❌ Error testing ${pageInfo.name} on ${viewport.name}: ${error.message}`);
        issues.push({
          page: pageInfo.name,
          viewport: viewport.name,
          type: 'load-error',
          error: error.message
        });
      }
    }

    console.log('');
  }

  await browser.close();

  // Generate report
  console.log('\n📊 TEST REPORT\n');
  console.log('=====================================\n');

  if (issues.length === 0) {
    console.log('✅ All tests passed! No issues found.\n');
  } else {
    console.log(`⚠️ Found ${issues.length} issues:\n`);

    issues.forEach((issue, index) => {
      console.log(`Issue #${index + 1}:`);
      console.log(`  Page: ${issue.page}`);
      console.log(`  Viewport: ${issue.viewport}`);
      console.log(`  Type: ${issue.type}`);

      if (issue.type === 'console-error') {
        console.log(`  Message: ${issue.message}`);
      } else if (issue.type === 'broken-images') {
        console.log(`  Broken images: ${issue.images.join(', ')}`);
      } else if (issue.type === 'overflow') {
        console.log(`  Overflowing elements: ${JSON.stringify(issue.elements, null, 2)}`);
      } else if (issue.type === 'load-error') {
        console.log(`  Error: ${issue.error}`);
      }

      console.log('');
    });
  }

  // Save report to file
  const reportPath = path.join(screenshotsDir, 'test-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    totalPages: pages.length,
    totalViewports: viewports.length,
    totalIssues: issues.length,
    issues: issues
  }, null, 2));

  console.log(`📁 Screenshots saved to: ${screenshotsDir}`);
  console.log(`📄 Report saved to: ${reportPath}\n`);
}

testAllPages().catch(console.error);