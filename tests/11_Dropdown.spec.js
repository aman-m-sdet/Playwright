// Dropdown

import{test,expect} from '@playwright/test'

test("Dropdown test",async({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/");

//Multiple ways to select option from dropdown
    //await page.locator("#country").selectOption({label:"India"})    //label: visible text
    //await page.locator("#country").selectOption("India");   //visible text
    //await page.locator("#country").selectOption({value:"uk"});   //value text   
    //await page.locator("#country").selectOption({index: 1});   //index text 

    //await page.selectOption("#country",'India');  //by text

//Assertions:
//1. check number of options in dropdown - approch 1
    /*const options=await page.locator("#country option")
    await expect(options).toHaveCount(10)*/

//2. check number of options in dropdown - approch 2
    //const options=await page.$$("#country option")
    //console.log("num of option:", options.length)
   //  await expect(options.length).toBe(10)

//3. check presence of vlaue in dropdown - approch 1
    /*const content = await page.locator('#country').textContent()
    await expect (content.includes('India')).toBeTruthy();*/

//4. check presence of vlaue in dropdown - approch 2 using looping
    /*const options=await page.$$("#country option")
    let status=false;
    for(const option of options)
    {
        //console.log(await option.textContent())  // prints all dropdown options
        let vlaue =await option.textContent();
        if(vlaue.includes('France'))
        {status=true;
            break;
        }
        expect(status).toBeTruthy();
    }*/
//5.select option from dropdown using loop  [optional for understanding]
    const options=await page.$$("#country option")
    for(const option of options)
    {
        //console.log(await option.textContent())  // prints all dropdown options
        let value =await option.textContent();
        if(value.includes('France'))
        {
        await page.selectOption("#country", value);
        break;
        }
    }
await page.waitForTimeout(5000);
})