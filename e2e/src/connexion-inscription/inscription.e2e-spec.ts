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

  it('should set new user data with badmail to check invalidMail err', async () => {
    await connexionPageObjects.autoSignUpUser('selenium', 'e2e', 'selenium.com', 'selenium', 'selenium');
    await connexionPageObjects.checkBoxClick();
    await connexionPageObjects.login();
    await browser.sleep(500);
    const expected = 'invalidMail';
    await browser.wait(ec.visibilityOf(element(by.id('invalidMail'))));
    const value = await element(by.id('invalidMail')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
    await browser.navigate().refresh();
  });

  it('should set new user data with bad confirmPassword to check passwordMatchingError err', async () => {
    await connexionPageObjects.autoSignUpUser('selenium', 'e2e', 'selenium@selenium.com', 'selenium', 'seleium');
    await connexionPageObjects.checkBoxClick();
    await connexionPageObjects.login();
    await browser.sleep(500);
    const expected = 'passwordMatchingError';
    await browser.wait(ec.visibilityOf(element(by.id('passwordMatchingError'))));
    const value = await element(by.id('passwordMatchingError')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
    await browser.navigate().refresh();
  });

  it('should set new user data without checkBoxClick', async () => {
    await connexionPageObjects.autoSignUpUser('selenium', 'e2e', 'selenium@selenium.com', 'selenium', 'selenium');
    await connexionPageObjects.login();
    await browser.sleep(500);
    const expected = 'invalidGridCheck';
    await browser.wait(ec.visibilityOf(element(by.id('invalidGridCheck'))));
    const value = await element(by.id('invalidGridCheck')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
    await browser.navigate().refresh();
  });

    //                                                        //
   // DECOMMENT WHEN 'SELENIUM' USER IS DELETED / OR GET ERR //
  //                                                        //

/*   it('should set GOOD new user data', async () => {
    await connexionPageObjects.autoSignUpUser('selenium', 'e2e', 'selenium@selenium.com', 'selenium', 'selenium');
    await connexionPageObjects.checkBoxClick();
    await connexionPageObjects.login();
    await browser.sleep(500);
    const expected = 'home';
    await browser.wait(ec.visibilityOf(element(by.id('home'))));
    const value = await element(by.id('home')).getAttribute('id');
    expect(value).to.eq(expected);
  });

  it('should deconnect user', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('deconnexion-link'))));
    await routingPageObjects.clickOnDeconnexionRoute();
    await browser.sleep(500);
    const expected = 'home';
    await browser.wait(ec.visibilityOf(element(by.id('home'))));
    const value = await element(by.id('home')).getAttribute('id');
    expect(value).to.eq(expected);
  }); */

  after(async () => {
    browser.waitForAngularEnabled(true);
  });
});
