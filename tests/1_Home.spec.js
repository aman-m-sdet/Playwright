import { test, expect } from "@playwright/test"

//const {test, expect } =  require('@playwright\test');

test('Home Page', async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");
    const pageTitle= await page.title();
    console.log('Page TITLE is:', pageTitle);

    // This are my expections
    await expect(page).toHaveTitle('STORE');
    const pageURL= page.url();
    console.log("Page URL is:" ,pageURL)

    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

    //closing the browser
    await page.close();
}) 

