import {test,expect} from '@playwright/test'
import {LoginPage} from './Pages/LoginPage.js';

test ("Test Login Page", async({page})=>{
 //login
 const login = new LoginPage(page)
 await login.GOTOURL();
 await login.LOGIN('midhat',"Midhat@123")
});