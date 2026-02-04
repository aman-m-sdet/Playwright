import {test,expect} from '@playwright/test'

//Bootstrap Dropdown

test("Bootstrap Dropdown test",async({page})=>{
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2")
    await page.locator('.multiselect').click();

    //1
    const options=await page.locator('ul>li label input');
    await expect(options).toHaveCount(11);

    //2
    const option= await page.$$('ul>li label input');
    await expect(option.length).toBe(11);

    //3 select from dropdown
    const opt= await page.$$('ul>li label')
    for(let op of opt)
    {
    const value=await op.textContent();
    //console.log("value is", value)
    if(value.includes('Angular') || value.includes('Java'));
    {
        await op.click()
    }
    }
 // 4. deselect 

    const optn= await page.$$('ul>li label')
    for(let oop of optn)
    {
    const value=await opp.textContent();
    //console.log("value is", value)
    if(value.includes('Html') || value.includes('CSS'));
    {
        await opp.click()
    }
    }
    await page.waitForTimeout(5000);


})