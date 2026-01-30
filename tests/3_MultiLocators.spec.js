/*#locating Multiple Elwmwnts:  check in 3.multi locator.spec.js
----------------------------
const element= await page.$$('locator')
*/

import {test, expect} from '@playwright/test'

test("Multi Locators In PW", async({page})=>{
await page.goto("https://www.demoblaze.com/index.htm")

const links = await page.$$("a")
for (const link in links)
{
    const linktext = await link.textContent()
    console.log(linktext)

}
const products = await page.$$("//div[@id='tbodyid']//div[4]//div[1]")
for (const product in products)
{
    const prodname = await product.textContent()
    console.log(prodname)
}

})