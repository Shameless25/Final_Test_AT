const MainPage = require ('./../po/pages/login.page.js');

const loginPage = new MainPage();

describe("Final test",()=>{
    beforeEach(async ()=>{
        await loginPage.open(); 
    });
    
    it("UC-1 Test Login form with empty credentials",async ()=>{
            await loginPage.login();
            await loginPage.clear('userName');
            await loginPage.clear('password');
            await loginPage.mainSelectors.item('loginButton').click();
            expect(await loginPage.mainSelectors.item('errorHandling')).toHaveText('Epic sadface: Username is required');
            console.log("Test 1 Ends");
    })

    it("UC-2 Test Login form with credentials by passing Username",async ()=>{
            await loginPage.login();
            await loginPage.clear('password');
            await loginPage.mainSelectors.item('loginButton').click();
            expect(await loginPage.mainSelectors.item('errorHandling')).toHaveText('Epic sadface: Password is required');
    })

    it("UC-3 Test Login form with credentials by passing Username & Password",async ()=>{
            await loginPage.login();
            await loginPage.mainSelectors.item('loginButton').click()
            const title = await browser.getTitle();
            expect (title).toBe('Swag Labs');
    })
});