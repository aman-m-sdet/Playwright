// Checkboxes

import {test, expect} from '@playwright/test'
test("Check boxes test",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Single chekcbox
    await page.locator("//input[@id='sunday' and @type='checkbox']").check();
    //await page.check("//input[@id='sunday' and @type='checkbox']");  -- this is another method

    expect(await page.locator("//input[@id='sunday' and @type='checkbox']")).toBeChecked();
    expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeTruthy();
    
    expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);

    //Multiple checkbox.

    const CheckboxesLocators=["//input[@id='sunday' and @type='checkbox']",
                     "//input[@id='monday'  and @type='checkbox']",
                     "//input[@id='saturday' and @type='checkbox']"];
    for (const locators of CheckboxesLocators)    // select multiple checkbox
    {
        await page.locator(locators).check();
    }
     await page.waitForTimeout(5000)

       for (const locators of CheckboxesLocators)    // unselect multiple checkbox
    {
        if(await page.locator(locators).isChecked())
        {
        await page.locator(locators).uncheck();
        }
    }
    await page.waitForTimeout(5000)
})