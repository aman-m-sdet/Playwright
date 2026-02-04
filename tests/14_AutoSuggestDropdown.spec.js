//Auto Suggest Dropdown -- filght search
import {test,expect} from '@playwright/test'

test("Autosuggest dropdown Test", async({page})=>{
    await page.goto("https://redbus.in/");
    await page.locator("#srcinput").fill('Delhi');
    await page.waitForSelector("(//div[@class='inputAndSwapWrapper___7eae05'])[1]")


    const FromCityOption = await page.$$("(//div[@class='inputAndSwapWrapper___7eae05'])[1]")
    
    for(let option of FromCityOption)
    {
        const value=await option.textContent();
        //console.log(value);
        if(value.includes('mayur vihar'))
        {
            await option.click();
            break;
        }
    }

   await page.waitForTimeout(5000);


})