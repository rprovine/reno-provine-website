const puppeteer = require('puppeteer');
const path = require('path');

const sites = [
  { url: 'https://analytics.lenilani.com', name: 'tourism-analytics-screenshot.png' },
  { url: 'https://web-dashboard-seven-pi.vercel.app', name: 'emergency-hub-screenshot.png' },
  { url: 'https://tourismbot.lenilani.com', name: 'tourism-bot-screenshot.png' },
  { url: 'https://oahu-transit-hub.vercel.app', name: 'oahu-transit-screenshot.png' },
  { url: 'https://ai-bot-special.lenilani.com', name: 'lenilani-ai-screenshot.png' },
  { url: 'https://hawaii-growth-calculator-df4o.vercel.app', name: 'growth-calculator-screenshot.png' },
  { url: 'https://hawaii-business-intelligence-system.vercel.app', name: 'business-intelligence-screenshot.png' },
  { url: 'https://beachhui.lenilani.com/home', name: 'beachhui-screenshot.png' }
];

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const site of sites) {
    try {
      console.log(`Capturing ${site.name}...`);
      const page = await browser.newPage();
      
      // Set viewport to a standard desktop size
      await page.setViewport({ width: 1440, height: 900 });
      
      // Navigate to the site
      await page.goto(site.url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Wait a bit for any animations to complete
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Take screenshot
      const screenshotPath = path.join(__dirname, 'public', 'images', site.name);
      await page.screenshot({ 
        path: screenshotPath,
        fullPage: false // Just capture the viewport
      });
      
      console.log(`✓ Saved ${site.name}`);
      await page.close();
    } catch (error) {
      console.error(`✗ Error capturing ${site.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('\nAll screenshots captured!');
}

captureScreenshots().catch(console.error);