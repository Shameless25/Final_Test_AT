const MainComponents = require ('./../components/main.components.js');

class MainPage {
    //Constructor to pass site components
    constructor() {
        this.mainSelectors = new MainComponents();
    }
    //Function to open testing site
    async open() {
        await browser.url('https://www.saucedemo.com/');
    }
}

module.exports = MainPage;