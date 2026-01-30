/* Locating Elements in Playwright
----------------------------------
1. property
2. css
3. xpath
#locating single element:
-------------------------
Link Buttons:
await page.locator('loctator').click()
**await page.click('locator')
InputBoxes:
await page.locator('locator').fill('value')
await page.locator('locator').type('value')
**await page.locator.fill('locator','value')
**await page.locator.type('locator','value')

#locating Multiple Elwmwnts:  check in 3.multi locator.spec.js
----------------------------
const element= await page.$$('locator')
*/

import {test, expect} from '@playwright/test'

test("Locators in PW", async({page})=>{
await page.goto("https://www.demoblaze.com/index.html")

//click on login button - property
await page.locator("id=login2").click()
//await page.click("id='login2'")

//provide username  - css
//await page.locator("#loginusername").fill("aman")
await page.fill("#loginusername", "aman")

//provide password  - css
//await page.locator("#loginpassword").fill('test@123')
await page.type("#loginpassword", 'test@123')

//click on login button - xpath
await page.click("//button[normalize-space()='Log in']")

//verify logout lik presense - xpath
/*const logoutlink = await page.locator("//button[normalize-space()='Log Out']")
await expect (logoutlink).toBeVisible()*/
await page.close()

})