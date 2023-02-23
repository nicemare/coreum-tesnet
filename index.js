const puppeteer = require('puppeteer')
const fs = require('fs');
const { devices } = puppeteer;
const iPhoneX = devices["iPhone X"];
//const { scrollPageToBottom } = require('puppeteer-autoscroll-down')


(async () => {
  const browser = await puppeteer.launch({
    headless:false,
    args: ['defaultViewport: 1400,900','--window-size=400,825','--incognito','--no-default-browser-check','--disable-site-isolation-trials','--no-experiments','--ignore-gpu-blacklist','--ignore-certificate-errors','--ignore-certificate-errors-spki-list','--disable-gpu','--disable-extensions','--disable-default-apps','--enable-features=NetworkService','--disable-setuid-sandbox','--no-sandbox','--disable-webgl','--disable-threaded-animation','--disable-threaded-scrolling','--disable-in-process-stack-traces','--disable-histogram-customizer','--disable-gl-extensions','--disable-composited-antialiasing','--disable-canvas-aa','--disable-3d-apis','--disable-accelerated-2d-canvas','--disable-accelerated-jpeg-decoding','--disable-accelerated-mjpeg-decode','--disable-app-list-dismiss-on-blur','--disable-accelerated-video-decode']
});

	const context = await browser.createIncognitoBrowserContext();  
   
  const page2 = await context.newPage();
  const web = `https://docs.coreum.dev/tools-ecosystem/faucet.html#testnet`;
  await page2.emulate(iPhoneX);
  await page2.goto(`${web}`,{timeout:100000});

  await page2.waitForSelector('#app > div.theme-container > main > div > div > div:nth-child(8) > div > input',{waitUntil : 'networkidle2'})
  await page2.type('#app > div.theme-container > main > div > div > div:nth-child(8) > div > input', 'testcore1nu7zd2c0eyu7fkjjyjv5gwkyue4p8m7u7pdkqf',{delay: 15})
  await page2.click ('#app > div.theme-container > main > div > div > div:nth-child(8) > div > button', {delay : 25})
  await page2.waitForSelector('#app > div > main > div > div > div:nth-child(8) > div.result > span', {waitUntil : 'networkidle2'})

 await browser.close()
})();
