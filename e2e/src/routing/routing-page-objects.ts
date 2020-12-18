import { element, by, ElementFinder } from 'protractor';

export class RoutingPageObjects {

    mentionsLegalesRoute!: ElementFinder;
    livraisonRoute!: ElementFinder;
    conditionsRetourRoute!: ElementFinder;
    contactRoute!: ElementFinder;
    instagramRoute!: ElementFinder;
    dropdownConnexionRoute!: ElementFinder;
    connexionRoute!: ElementFinder;
    inscriptionRoute!: ElementFinder;
    panierRoute!: ElementFinder;
    colliersRoute!: ElementFinder;
    braceletsRoute!: ElementFinder;
    boRoute!: ElementFinder;
    aproposRoute!: ElementFinder;
    entretienRoute!: ElementFinder;
    lamarqueRoute!: ElementFinder;
    lithotherapieRoute!: ElementFinder;

    constructor() {
        this.mentionsLegalesRoute = element(by.id('mentions-legales-link'));
        this.livraisonRoute = element(by.id('livraison-link'));
        this.conditionsRetourRoute = element(by.id('conditions-retour-link'));
        this.contactRoute = element(by.id('contact-link'));
        this.instagramRoute = element(by.id('instagram-link'));
        this.dropdownConnexionRoute = element(by.id('connexion-dropdown'));
        this.connexionRoute = element(by.id('connexion-link'));
        this.inscriptionRoute = element(by.id('inscription-link'));
        this.panierRoute = element(by.id('panier-link'));
        this.colliersRoute = element(by.id('colliers-link'));
        this.braceletsRoute = element(by.id('bracelets-link'));
        this.boRoute = element(by.id('bo-link'));
        this.aproposRoute = element(by.id('a-propos-dropdown'));
        this.entretienRoute = element(by.id('entretien-bijoux-link'));
        this.lamarqueRoute = element(by.id('marque-link'));
        this.lithotherapieRoute = element(by.id('lithotherapie-link'));
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

    async clickOnDropdownConnexion(): Promise<void> {
        await this.dropdownConnexionRoute.click();
    }

    async clickOnConnexionRoute(): Promise<void> {
        await this.connexionRoute.click();
    }

    async clickOnInscriptionRoute(): Promise<void> {
        await this.inscriptionRoute.click();
    }

    async clickOnPanierRoute(): Promise<void> {
        await this.panierRoute.click();
    }

    async clickOnColliersRoute(): Promise<void> {
        await this.colliersRoute.click();
    }

    async clickOnBraceletsRoute(): Promise<void> {
        await this.braceletsRoute.click();
    }

    async clickOnBORoute(): Promise<void> {
        await this.boRoute.click();
    }

    async clickOnAProposRoute(): Promise<void> {
        await this.aproposRoute.click();
    }

    async clickOnEntretienRoute(): Promise<void> {
        await this.entretienRoute.click();
    }

    async clickOnLaMarqueRoute(): Promise<void> {
        await this.lamarqueRoute.click();
    }

    async clickOnLithotherapieRoute(): Promise<void> {
        await this.lithotherapieRoute.click();
    }

}
