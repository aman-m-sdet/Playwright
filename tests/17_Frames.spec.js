//iframes

import { test, expect } from '@playwright/test';
test("frames", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    //total frames
    const allframes = await page.frames();
    console.log("num of frames:", allframes.length)

    //approch 1:
    await page.frame({ url: "https://ui.vision/demo/webtest/frame1" })

});