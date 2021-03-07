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

  it('should load mentions-legales page', async () => {
    await browser.executeScript('window.scrollTo(0, document.body.scrollHeight);').then(async () => {
      await browser.wait(ec.visibilityOf(element(by.id('mentions-legales-link'))));
      await browser.sleep(500);
      await routingPageObjects.clickOnMentionsLegalesRoute();
    });
    await browser.sleep(500);
    const expected = 'mentions-legales';
    await browser.wait(ec.visibilityOf(element(by.id('mentions-legales'))));
    const value = await element(by.id('mentions-legales')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
  });

  it('should load livraison page', async () => {
    await browser.executeScript('window.scrollTo(0, document.body.scrollHeight);').then(async () => {
      await browser.wait(ec.visibilityOf(element(by.id('livraison-link'))));
      await browser.sleep(500);
      await routingPageObjects.clickOnLivraisonRoute();
    });
    await browser.sleep(500);
    const expected = 'livraison';
    await browser.wait(ec.visibilityOf(element(by.id('livraison'))));
    const value = await element(by.id('livraison')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
  });

  it('should load conditions de retour page', async () => {
    await browser.executeScript('window.scrollTo(0, document.body.scrollHeight);').then(async () => {
      await browser.wait(ec.visibilityOf(element(by.id('conditions-retour-link'))));
      await browser.sleep(500);
      await routingPageObjects.clickOnConditionsRetourRoute();
    });
    await browser.sleep(500);
    const expected = 'conditions-retour';
    await browser.wait(ec.visibilityOf(element(by.id('conditions-retour'))));
    const value = await element(by.id('conditions-retour')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
  });

  it('should load contact page', async () => {
    await browser.executeScript('window.scrollTo(0, document.body.scrollHeight);').then(async () => {
      await browser.wait(ec.visibilityOf(element(by.id('contact-link'))));
      await browser.sleep(500);
      await routingPageObjects.clickOnContactRoute();
    });
    await browser.sleep(500);
    const expected = 'contact';
    await browser.wait(ec.visibilityOf(element(by.id('contact'))));
    const value = await element(by.id('contact')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
  });

  it('should load Instagram page', async () => {
    await browser.executeScript('window.scrollTo(0, document.body.scrollHeight);').then(async () => {
      await browser.wait(ec.visibilityOf(element(by.id('instagram-link'))));
      await browser.sleep(500);
      await routingPageObjects.clickOnInstagramRoute();
    });
    await browser.sleep(500);
    const url = 'https://www.instagram.com/kira.bijoux/';
    await browser.sleep(500);
    browser.getCurrentUrl().toString().match(url);
    const allWindowHandlers = await browser.getAllWindowHandles();
    if (allWindowHandlers.length > 1) {
      for (let windowHandlerIndex = 1; windowHandlerIndex < allWindowHandlers.length; windowHandlerIndex++) {
        const windowHandler = allWindowHandlers[windowHandlerIndex];
        await browser.switchTo().window(windowHandler);
        await browser.close();
      }
    }
    await browser.switchTo().window(allWindowHandlers[0]);
    await browser.sleep(500);
  });

  after(async () => {
    browser.waitForAngularEnabled(true);
  });
});
