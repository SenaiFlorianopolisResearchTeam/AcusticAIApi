import { firefox } from "playwright";
import cheerio from "cheerio";

const testHome = async () => {
    const browser = await firefox.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
  
    const url = "127.0.0.1:3000"

    try {
        await page.goto(url)
        const html = await page.content()

        const $ = cheerio.load(html)
        const links = []
        $('a').each((_, element) => {
          links.push($(element).attr('href'))
        })
        
        await page.click('a')

        await page.waitForTimeout(5000)

        await page.screenshot({ path: 'local.png'})

        console.info("INFO: Testing links... (Home)")
    } catch (error) {
        console.error("Error while scraping:", error);
    } finally {
        await browser.close();
    }
}

export default testHome
