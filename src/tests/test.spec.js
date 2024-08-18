const MainPage = require ('./../po/pages/login.page.js');

const loginPage = new MainPage();

describe("Final test",()=>{
    //Opening test site before each test
    beforeEach(async ()=>{
        await loginPage.open(); 
    });
    //Passing setted values for test purpose
    loginPage.mainSelectors.getUserData().forEach(({username, password, expectedTitle})=>{
        it("UC-1 Test Login form with empty credentials",async ()=>{
            console.log("Test 1 Starts");
            //Inserting data to Login and Password Field
            console.log("Setting username and password")
            await loginPage.mainSelectors.item('userName').setValue(username);
            await loginPage.mainSelectors.item('password').setValue(password);
            //Clearing Login and Password input
            console.log("Clearing Login and Password input")
            await loginPage.mainSelectors.item('userName').clearValue();
            await loginPage.mainSelectors.item('password').clearValue();
            //Submiting Data
            console.log("Submiting data")
            await loginPage.mainSelectors.item('loginButton').click();
            //Checking Correct Error messgage displays
            console.log("Error message is: Epic sadface: Username is required")
            expect(await loginPage.mainSelectors.item('errorHandling')).toHaveText('Epic sadface: Username is required');
            console.log("Test 1 Ends");
        })

        it("UC-2 Test Login form with credentials by passing Username",async ()=>{
            console.log("Test 2 Starts");
            //Inserting data to Login and Password Field
            console.log("Setting username and password")
            await loginPage.mainSelectors.item('userName').setValue(username);
            await loginPage.mainSelectors.item('password').setValue(password);
            //Clearing  Password input
            console.log("Clearing Password input")
            await loginPage.mainSelectors.item('password').clearValue();
            //Submiting Data
            console.log("Submiting data")
            await loginPage.mainSelectors.item('loginButton').click();
            //Checking Correct Error messgage displays
            console.log("Error message is: Epic sadface: Password is required")
            expect(await loginPage.mainSelectors.item('errorHandling')).toHaveText('Epic sadface: Password is required');
            console.log("Test 2 Ends");
        })

        it("UC-3 Test Login form with credentials by passing Username & Password",async ()=>{
            console.log("Test 3 Starts");
            //Inserting data to Login and Password Field
            console.log("Setting username and password")
            await loginPage.mainSelectors.item('userName').setValue(username);
            await loginPage.mainSelectors.item('password').setValue(password);
            //Submiting Data
            console.log("Submiting data")
            await loginPage.mainSelectors.item('loginButton').click()
            //Getting the Page Title
            const title = await browser.getTitle();
            console.log("Page title is:", title);
            //Checking page Title
            expect (title).toBe(expectedTitle);
            console.log("Test 3 Ends");
        })
    })
})