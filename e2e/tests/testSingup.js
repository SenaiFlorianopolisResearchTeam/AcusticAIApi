import { firefox } from "playwright";
import cheerio from "cheerio";

const testSignup = async () => {
    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
  
    const url = "127.0.0.1:3000";

    try {
        await page.goto(url);
        console.info("INFO: Testing links... (Signup)")
    } catch (error) {
        console.error("Error while scraping:", error);
    } finally {
        await browser.close();
    }
}

export default testSignup