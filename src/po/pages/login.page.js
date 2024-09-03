const MainComponents = require ('./../components/main.components.js');

class MainPage {
    constructor() {
        this.mainSelectors = new MainComponents();
    }
    async open() {
        await browser.url('https://www.saucedemo.com/');
    }
    async login(){
        await this.mainSelectors.item('userName').setValue('standard_user');
        await this.mainSelectors.item('password').setValue('secret_sauce');
    }
    async clear(name){
        await this.mainSelectors.item(name).clearValue();
    }
}

module.exports = MainPage;