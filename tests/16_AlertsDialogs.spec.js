// Playwright can interact with the web page dialogs such as alert, confirm, prompt
/* alert(), confirm(), prompt() dialogs
By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them.
 However, you can register a dialog handler before the action that triggers the dialog to either dialog.
 accept() or dialog.dismiss() it.*/

 import {test,expect} from '@playwright/test'

// "Simple Alert"
test("alerts test - Ok",async ({page})=>{
    await page.goto ("https://testautomationpractice.blogspot.com/")

    //handaling dialog window handler
 page.on('daiolg',async dailog =>{
    expect (dailog.type()).toContain("alert");
    expect (dailog.message()).toContain("I am an alert box!");
    await dailog.accept();
  });

  await page.click("//button[@id='alertBtn']");
  await page.waitForTimeout(3000);

});

// "Confirmation Alert"
test("Confirm test -  Cancel/Ok",async ({page})=>{
    await page.goto ("https://testautomationpractice.blogspot.com/")

    //handaling dialog window handler
 page.on('dialog',async dialog =>{
    expect (dialog.type()).toContain("confirm");
    expect (dialog.message()).toContain("Press a button!");
    await dialog.accept();    // OK 
    //await dialog.dismiss();  // close
  });

  await page.click("//button[@id='confirmBtn']");

  await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
  //await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed Cancel!");
  await page.waitForTimeout(3000);

});

//"Prompt Alert"

test("Prompt test -  Cancel/Ok with text",async ({page})=>{
    await page.goto ("https://testautomationpractice.blogspot.com/")

    //handaling dialog window handler
 page.on('dialog',async dialog =>{
    expect (dialog.type()).toContain("prompt");
    expect (dialog.message()).toContain("Please enter your name:");
    expect (dialog.defaultValue()).toContain("Harry Potter")
    await dialog.accept('Aman');    // OK 
    //await dialog.dismiss();  // close
  });

  await page.click("//button[@id='promptBtn']");

  await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Aman! How are you today?");
  //await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed Cancel!");
  await page.waitForTimeout(3000);

});