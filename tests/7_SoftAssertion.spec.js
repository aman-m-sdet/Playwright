import{test, expect} from '@playwright/test'

// in Hard assertion we use   await expect(page).toHaveTitle("STORE123");
// in Soft assertion we use   await expect.soft(page).toHaveTitle("STORE123");

test("Soft Assertions test", async({page})=> {
 await page.goto("https://demoblaze.com/index.html")

 //Hard Assertions : if expection is wrong it will terminate and rest of the code will not continue.
/* await expect(page).toHaveTitle("STORE123");   // intinetially wrong title
 await expect(page).toHaveURL("https://demoblaze.com/index.html")
 await expect(page.locator('.navbar-brand')).toBeVisible(); */

//Soft Assertions  : even wrong expections but still continue the code. it wont stop rest of the code.
 await expect.soft(page).toHaveTitle("STORE123");   // intinetially wrong titl
 await expect.soft(page).toHaveURL("https://demoblaze.com/index.html")
 await expect.soft(page.locator('.navbar-brand')).toBeVisible();

})