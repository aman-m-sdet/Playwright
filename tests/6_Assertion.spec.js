/*Assertions:   playwright include tet assertions in the form of expect function
[MOSTLY USED IN FEW ASSERTIONS]
------------- https://playwright.dev/docs/test-assertions
1) expect(page).toHaveURL()             page has url
   negative also can be done    expect(page).not.toHaveURL()  
2) expect(page).toHaveTitle()           page has Title
3) expect(locator).toBeVisible()        Element is visible
4)await expect(locator).toBeEnabled()	Element is enabled
  await expect(locator).toBeDisabled()	Element is disabled
5)await expect(locator).toBeChecked()	Checkbox/radio button is checked
6)await expect(locator).toHaveAttribute()	Element has a DOM attribute
7)await expect(locator).toHaveText()	Element matches text
8)await expect(locator).toContainText()	Element contains text
9)await expect(locator).toHaveValue()	Input has a value
10)await expect(locator).toHaveCount()	List has exact number of children/ has given length
*/
//const {test, expect} = require("@playwright/test")
import {test, expect} from '@playwright/test'

test("Assertionstest", async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register")

    //1) expect(page).toHaveURL()             page has url
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

    //2) expect(page).toHaveTitle()           page has Title
    await expect(page).toHaveTitle ("nopCommerce demo store. Register")

    //3) expect(locator).toBeVisible()        Element is visible
    const logoElement= page.locator('.header-logo') 
    await expect(logoElement).toBeVisible() 

    //4)await expect(locator).toBeEnabled()	Element/ control is enabled
    //wait expect(locator).toBeDisabled()	Element is disabled
    const SerchStorebox = page.locator("#small-search-box-form")
    await expect(SerchStorebox).toBeEnabled()

    //5)await expect(locator).toBeChecked()	Checkbox/radio button is checked

    //radiobuton
    const radiobutton=page.locator('#gender-male');
    await radiobutton.click() //select radiobutton
    await expect(radiobutton).toBeChecked()

    //check box
    const checkbox=page.locator('#NewsLetterSubscriptions_0__IsActive')  // already selected
    await expect(checkbox).toBeChecked()

    //6)await expect(locator).toHaveAttribute()	Element has a DOM attribute
    const RegisterButton=page.locator('#register-button')
    await expect(RegisterButton).toHaveAttribute("type","submit")

    //7)await expect(locator).toHaveText()	Element matches text (exacet match)
    await expect (page.locator(".page-title h1")).toHaveText('Register')

    //8)await expect(locator).toContainText()	Element contains text (partial match)
    await expect (page.locator(".page-title h1")).toContainText('Reg')

    //9)await expect(locator).toHaveValue()	Input has a value
    const Email=page.locator('#Email')
    await Email.fill("aman@gmail.com")
    await expect(Email).toHaveValue('aman@gmail.com')

    //10)await expect(locator).toHaveCount()	List has exact number (count in dropdown)
    const Options=  page.locator("select[id='products-pagesize'] option")
    await expect(Options).toHaveCount(3);
})