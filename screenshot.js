const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function captureScreenshots() {
  const screenshotDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const pages = [
    { name: 'home', url: 'http://localhost:3000' },
    { name: 'about', url: 'http://localhost:3000/about' },
    { name: 'services', url: 'http://localhost:3000/services' },
    { name: 'solutions', url: 'http://localhost:3000/solutions' },
    { name: 'contact', url: 'http://localhost:3000/contact' },
    { name: 'careers', url: 'http://localhost:3000/careers' }
  ];

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const p of pages) {
    console.log(`Capturing ${p.name}...`);
    await page.goto(p.url, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.screenshot({
      path: path.join(screenshotDir, `${p.name}.png`),
      fullPage: true
    });
  }

  // Also capture mobile view of home
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(screenshotDir, 'home-mobile.png'),
    fullPage: true
  });

  await browser.close();
  console.log('Screenshots saved to ./screenshots/');
}

captureScreenshots().catch(console.error);
