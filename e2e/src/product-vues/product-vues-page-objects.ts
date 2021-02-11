import { element, by } from 'protractor';

export class ProductVuesPageObjects {

    ayleeBox = element(by.id('Aylee-box'));
    daenerysBox = element(by.id('Daenerys-box'));
    meredithBox = element(by.id('Meredith-box'));
    marieBox = element(by.id('Marie-box'));
    ayleeDetails = element(by.id('Aylee-details-link'));
    daenerysDetails = element(by.id('Daenerys-details-link'));
    meredithDetails = element(by.id('Meredith-details-link'));
    marieDetails = element(by.id('Marie-details-link'));
    alertStock = element(by.id('alert-stock'));
    closeButton = element(by.css('button[type=close]'));

    constructor() {}

    async checkAyleeBox(): Promise<void> {
        await this.ayleeBox.click();
    }

    async checkDaenerysBox(): Promise<void> {
        await this.daenerysBox.click();
    }

    async checkMeredithBox(): Promise<void> {
        await this.meredithBox.click();
    }

    async checkMarieBox(): Promise<void> {
        await this.marieBox.click();
    }

    async clickOnAyleeDetails(): Promise<void> {
        await this.ayleeDetails.click();
    }

    async clickOnDaenerysDetails(): Promise<void> {
        await this.daenerysDetails.click();
    }

    async clickOnMeredithDetails(): Promise<void> {
        await this.meredithDetails.click();
    }

    async clickOnMarieDetails(): Promise<void> {
        await this.marieDetails.click();
    }

    async clickOnAlertStock(): Promise<void> {
        await this.alertStock.click();
    }

    async closeModal(): Promise<void> {
        await this.closeButton.click();
    }

}
