//Hidden Dropdowns

import {test, expect} from '@playwright/test'

test("Hiddendropdown Test", async({page})=> {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    await page.waitForTimeout(5000);

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();


    await page.locator("//a[@class='oxd-main-menu-item active']").click();

    //clcik dropdown  // after enable debugger in selector hub
    await page.locator("//*[@id='app]/div[1]/div[2]....")

    //waiting for options
    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span");
    for(let option of options)
    {
        const jobTitle =await option.textContent();
        //console.log(jobTitle);

        if(jobTitle.includes('QA Engineer'))
        {
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000);

})