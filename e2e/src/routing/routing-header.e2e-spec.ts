import { browser, element, by, ExpectedConditions as ec } from 'protractor';

import chai = require('chai');
import { RoutingPageObjects } from './routing-page-objects';
const expect = chai.expect;

describe('routing test', () => {

  let routingPageObjects: RoutingPageObjects;

  before( async () => {
    await browser.get('/');
    browser.waitForAngularEnabled(false);
    routingPageObjects = new RoutingPageObjects();
  });

  it('should load home page', async () => {
    await browser.get('/home');
    await browser.sleep(500);
   });

  it('should open dropdown connexion/inscription', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('connexion-dropdown'))));
    await browser.sleep(500);
    await routingPageObjects.clickOnDropdownConnexion();
    await browser.sleep(500);
    const expected = 'connexion-link';
    await browser.wait(ec.visibilityOf(element(by.id('connexion-link'))));
    const value = await element(by.id('connexion-link')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
   });

  it('should load connexion page', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('connexion-link'))));
    await routingPageObjects.clickOnConnexionRoute();
    await browser.sleep(500);
    const expected = 'connexion';
    await browser.wait(ec.visibilityOf(element(by.id('connexion'))));
    const value = await element(by.id('connexion')).getAttribute('id');
    expect(value).to.eq(expected);
   });

  it('should re-open dropdown connexion/inscription', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('connexion-dropdown'))));
    await routingPageObjects.clickOnDropdownConnexion();
    await browser.sleep(500);
    const expected = 'inscription-link';
    await browser.wait(ec.visibilityOf(element(by.id('inscription-link'))));
    const value = await element(by.id('inscription-link')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
   });

  it('should load inscription page', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('inscription-link'))));
    await routingPageObjects.clickOnInscriptionRoute();
    await browser.sleep(500);
    const expected = 'inscription';
    await browser.wait(ec.visibilityOf(element(by.id('inscription'))));
    const value = await element(by.id('inscription')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(1000);
   });

  it('should load panier page', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('panier-link'))));
    await routingPageObjects.clickOnPanierRoute();
    await browser.sleep(500);
    const expected = 'panier';
    await browser.wait(ec.visibilityOf(element(by.id('panier'))));
    const value = await element(by.id('panier')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
   });

  after(async () => {
    browser.waitForAngularEnabled(true);
  });
});
