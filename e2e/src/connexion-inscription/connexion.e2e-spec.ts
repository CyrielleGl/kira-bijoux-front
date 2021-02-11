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

  it('should set bad user data to check badUserData', async () => {
    await connexionPageObjects.autoSignInUser('badmail@test.com', 'badpassword');
    await connexionPageObjects.login();
    await browser.sleep(500);
    const expected = 'badUserData';
    await browser.wait(ec.visibilityOf(element(by.id('badUserData'))));
    const value = await element(by.id('badUserData')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
    await browser.navigate().refresh();
  });

  it('should set bad user data to check invalidMail', async () => {
    await connexionPageObjects.autoSignInUser('test.com', 'test');
    await connexionPageObjects.login();
    await browser.sleep(500);
    const expected = 'invalidMail';
    await browser.wait(ec.visibilityOf(element(by.id('invalidMail'))));
    const value = await element(by.id('invalidMail')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
    await browser.navigate().refresh();
  });

  it('should set good user data', async () => {
    await connexionPageObjects.autoSignInUser('test@test.com', 'test');
    await connexionPageObjects.login();
    await browser.sleep(500);
    const expected = 'home';
    await browser.wait(ec.visibilityOf(element(by.id('home'))));
    const value = await element(by.id('home')).getAttribute('id');
    expect(value).to.eq(expected);
  });

  it('should re-open dropdown connexion/inscription', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('connexion-dropdown'))));
    await browser.sleep(500);
    await routingPageObjects.clickOnDropdownConnexion();
    await browser.sleep(500);
    const expected = 'deconnexion-link';
    await browser.wait(ec.visibilityOf(element(by.id('deconnexion-link'))));
    const value = await element(by.id('deconnexion-link')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
  });

  it('should deconnect user', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('deconnexion-link'))));
    await routingPageObjects.clickOnDeconnexionRoute();
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
