class MainComponents{

    constructor() {
       this.selectors = {
        username:"xpath://input[@id='user-name']",
        password:"xpath://input[@id='password']",
        loginbutton:"xpath://input[@id='login-button']",
        errorhandling:"xpath://div//h3[contains(@data-test, 'error')]",
       }
    }

    item(el){
        return $(this.selectors[el.toLowerCase()]);
    }
}

module.exports = MainComponents;