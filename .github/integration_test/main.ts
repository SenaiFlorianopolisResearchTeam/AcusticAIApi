import puppeteer from "puppeteer"
import * as cheerio from "cheerio"

const test = async () => {

    const browser = await puppeteer.launch()

    const page = await browser.newPage()

    await page.goto(`http://localhost:3000/`)

    const htmlC = await page.content()

    await page.screenshot({path: 'test.png'});

    await browser.close()

    const $ = cheerio.load(htmlC)
    
}

test()