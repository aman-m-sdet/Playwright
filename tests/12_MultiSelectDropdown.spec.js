//MUltiselect-Dropdown

import {test,expect} from'@playwright/test'

test("multiselect-Dropdown-Test", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //select multiple options from multi select dropdown
    await page.selectOption('#colors',['Blue','Red','Yellow']);

    //Assertion:
    //1. check number of option in dropdown --1st approch
    const options= await page.locator('#colors option')
    await expect(options).toHaveCount(7);

     //2. check number of option in dropdown using js array - 2 approch
    const option= await page.$$('#colors option')
    console.log("number of option:", option.length)
    await expect(option.length).toBe(7);

    //3. presence of valu/option in dropdown
    const content=await page.locator('#colors').textContent();
    await expect(content.includes ('Blue')).toBeTruthy();
    await expect(content.includes ('blCK')).toBeFalsy();


    await page.waitForTimeout(5000);

})