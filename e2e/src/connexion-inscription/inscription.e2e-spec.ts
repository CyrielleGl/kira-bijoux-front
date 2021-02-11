import { browser, element, by, ExpectedConditions as ec } from 'protractor';

import chai = require('chai');
import { RoutingPageObjects } from '../routing/routing-page-objects';
import { ConnexionPageObjects } from './connexion-page-objects';
const expect = chai.expect;

describe('routing test', () => {

  let routingPageObjects: RoutingPageObjects;
  let connexionPageObjects: ConnexionPageObjects;

  before( async () => {
    await browser.get('/');
    browser.waitForAngularEnabled(false);
    routingPageObjects = new RoutingPageObjects();
    connexionPageObjects = new ConnexionPageObjects();
  });

  it('should load home page', async () => {
    await browser.get('/home');
    await browser.sleep(500);
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
    await browser.sleep(500);
  });

  it('should set new user data', async () => {
    await connexionPageObjects.autoSignUpUser('selenium', 'e2e', 'selenium@selenium.com', 'selenium', 'selenium');
    await browser.sleep(500);
    const expected = 'home';
    await browser.wait(ec.visibilityOf(element(by.id('home'))));
    const value = await element(by.id('home')).getAttribute('id');
    expect(value).to.eq(expected);
  });

  after(async () => {
    browser.waitForAngularEnabled(true);
  });
});
