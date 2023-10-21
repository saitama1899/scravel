const playwright = require('playwright')

async function scrapeWebsite(url) {
    const browser = await playwright.chromium.launch({ headless: true });
    const context = await browser.newContext({
        // Configuraciones adicionales para evitar ser detectado como bot
        viewport: { width: 1280, height: 720 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
    });
    const page = await context.newPage()

    await page.goto(url)

    const title = await page.title()

    await browser.close()

    return { title }
}

module.exports = { scrapeWebsite }