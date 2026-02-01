// Input boxes

const {test, expect}= require('@playwright/test')

test("Inputbox test", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //input box - firstname

    await expect (await page.locator("//input[@id='name']")).toBeVisible();
    await expect (await page.locator("//input[@id='name']")).toBeEmpty();
    await expect (await page.locator("//input[@id='name']")).toBeEditable();
    await expect (await page.locator("//input[@id='name']")).toBeEnabled();

    //await page.locator("//input[@id='name']").fill("Aman") //-- first method
    await page.fill("//input[@id='name']", "Aman")

    await page.waitForTimeout(5000); // pausing the code
})