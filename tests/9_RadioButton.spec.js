// Radio buttos:  at a time you can select only 1

const {test, expect}= require('@playwright/test')

test("Inputbox test", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //input box - firstname
    await page.locator("//input[@id='male']").check();  //-- 1st method "male" radio button is checked
    //  await page.check("//input[@id='male']")  --2nd method
    await expect (await page.locator("//input[@id='male']")).toBeVisible();
    await expect (await page.locator("//input[@id='male']")).toBeChecked();
    await expect (await page.locator("//input[@id='male']").isChecked()).toBeTruthy();

    await expect (await page.locator("//input[@id='female']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000); // pausing the code
})