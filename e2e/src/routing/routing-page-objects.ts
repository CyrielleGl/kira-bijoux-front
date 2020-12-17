import { browser, element, by, ElementFinder } from 'protractor';

export class RoutingPageObjects {

    mentionsLegalesRoute!: ElementFinder;
    livraisonRoute!: ElementFinder;
    conditionsRetourRoute!: ElementFinder;
    contactRoute!: ElementFinder;
    instagramRoute!: ElementFinder;

    constructor() {
        this.mentionsLegalesRoute = element(by.id('mentions-legales-link'));
        this.livraisonRoute = element(by.id('livraison-link'));
        this.conditionsRetourRoute = element(by.id('conditions-retour-link'));
        this.contactRoute = element(by.id('contact-link'));
        this.instagramRoute = element(by.id('instagram-link'));
    }

    async clickOnMentionsLegalesRoute(): Promise<void> {
        await this.mentionsLegalesRoute.click();
    }

    async clickOnLivraisonRoute(): Promise<void> {
        await this.livraisonRoute.click();
    }

    async clickOnConditionsRetourRoute(): Promise<void> {
        await this.conditionsRetourRoute.click();
    }

    async clickOnContactRoute(): Promise<void> {
        await this.contactRoute.click();
    }

    async clickOnInstagramRoute(): Promise<void> {
        await this.instagramRoute.click();
    }

}
