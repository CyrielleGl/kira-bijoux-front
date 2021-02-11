import { element, by, ElementFinder } from 'protractor';

export class ConnexionPageObjects {

    firstname = element(by.id('field-firstname'));
    name = element(by.id('field-name'));
    email = element(by.id('field-email'));
    password = element(by.id('field-password'));
    confirmPassword = element(by.id('field-confirmpassword'));
    checkBox = element(by.id('gridCheck'));
    loginButton = element(by.css('button[type=submit]'));

    constructor() {}

    async autoSignInUser(email: string, password: string): Promise<void> {
        await this.setEmail(email);
        await this.setPassword(password);
        await this.login();
    }

    async autoSignUpUser(firstname: string, name: string, email: string, password: string, confirmPassword: string): Promise<void> {
        await this.setFirstName(firstname);
        await this.setName(name);
        await this.setEmail(email);
        await this.setPassword(password);
        await this.setConfirmPassword(confirmPassword);
    }

    async setFirstName(firstname: string): Promise<void> {
        await this.firstname.sendKeys(firstname);
    }

    async setName(name: string): Promise<void> {
        await this.name.sendKeys(name);
    }

    async setEmail(email: string): Promise<void> {
        await this.email.sendKeys(email);
    }

    async setPassword(password: string): Promise<void> {
        await this.password.sendKeys(password);
    }

    async setConfirmPassword(confirmPassword: string): Promise<void> {
        await this.confirmPassword.sendKeys(confirmPassword);
    }

    async checkBoxClick(): Promise<void> {
        await this.checkBox.click();
    }

    async login(): Promise<void> {
        await this.loginButton.click();
    }

}
