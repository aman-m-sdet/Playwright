import { test, expect } from '@playwright/test';

test("innerframes", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3 = await page.frame("url:https://https://ui.vision/demo/webtest/frames/")
    frame3.locator("input[name='mytext3']").fill("Welcome")

    //nested frame
    const childframe = frame3.childFrame().childframe[0].locator("//p[normalize-space()='iframe inside frame:']").check()
    page.waitForTimeout(5000)

})