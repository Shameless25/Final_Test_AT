class MainComponents{

    constructor() {
        //List of Selectors
       this.selectors = {
        username:"xpath://input[@id='user-name']",
        password:"xpath://input[@id='password']",
        loginbutton:"xpath://input[@id='login-button']",
        errorhandling:"xpath://div//h3[contains(@data-test, 'error')]",
       }
    }
    //Function for selecting specific selectors
    item(el){
        return $(this.selectors[el.toLowerCase()]);
    }
    //Set up of inseted data
    getUserData(){
        return [{ username: 'standard_user', password: 'secret_sauce', expectedTitle: 'Swag Labs'}]
    }
}

module.exports = MainComponents;