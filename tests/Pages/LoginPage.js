exports.LoginPage =
class LoginPage
{
    //Locators/elements
    constructor (Page) {
        this.page = Page;
        this.LoginLink='#login2'
        this.UsernameInput ="#loginusername";
        this.PasswordInput = "#loginpassword";
        this.LoginBtn = "//button[normalize-space()='Log in']";
    }
     //Ations
    async GOTOURL(){
        await this.page.goto("https://demoblaze.com/")
    }

    async LOGIN(UN,PSD){
        await this.page.locator(this.LoginLink).click();
        await this.page.locator(this.UsernameInput).fill(UN);
        await this.page.locator(this.PasswordInput).fill(PSD);
        await this.page.locator(this.LoginBtn).click();
    }
}