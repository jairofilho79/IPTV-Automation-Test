const puppeteer = require('puppeteer');

(async () => {
    const screenSizeWidth = 1920;
    const screenSizeHeight = 937;
    const browser = await puppeteer.launch({
        // executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
        headless: false,
        args: [`--window-size=${screenSizeWidth},${screenSizeHeight}`]
    });
    const pages = await browser.pages();

    const page = pages[0];
    const override = Object.assign(page.viewport(), {width: screenSizeWidth ,height: screenSizeHeight});
    await page.setViewport(override);

    // Open page.
    await page.goto('http://localhost:4200');

    // Focus input field.
    await page.waitForSelector('#searchInput');
    await page.type('#searchInput','Lethal', {delay: 20});
    await page.keyboard.press(String.fromCharCode(13)); //Enter

    // Focus input field.

    await page.waitFor('ol', {visible: true});
    await page.waitFor(600);
    await page.keyboard.press("ArrowDown"); //Down arrow
    await page.waitFor(600);
    await page.keyboard.press("ArrowRight"); //right arrow
    await page.waitFor(600);
    await page.keyboard.press("ArrowRight"); //right arrow
    await page.waitFor(600);
    await page.keyboard.press(String.fromCharCode(13)); //Enter

    await page.waitFor(2000);
    await page.keyboard.press("ArrowLeft"); //right arrow
    await page.waitFor(600);
    await page.keyboard.press(String.fromCharCode(13)); //Enter

    await page.waitFor(3000);
    await browser.close();

})();