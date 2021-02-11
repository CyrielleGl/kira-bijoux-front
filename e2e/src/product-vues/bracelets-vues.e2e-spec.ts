import { browser, element, by, ExpectedConditions as ec } from 'protractor';

import chai = require('chai');
import { RoutingPageObjects } from '../routing/routing-page-objects';
import { ProductVuesPageObjects } from './product-vues-page-objects';
const expect = chai.expect;

describe('routing test', () => {

  let routingPageObjects: RoutingPageObjects;
  let productVuesPageObjects: ProductVuesPageObjects;

  before( async () => {
    await browser.get('/');
    browser.waitForAngularEnabled(false);
    routingPageObjects = new RoutingPageObjects();
    productVuesPageObjects = new ProductVuesPageObjects();
  });

  it('should load home page', async () => {
    await browser.get('/home');
    await browser.sleep(500);
  });

  // BRACELETS

  it('should load bracelets page', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('bracelets-link'))));
    await browser.sleep(500);
    await routingPageObjects.clickOnBraceletsRoute();
    await browser.sleep(500);
    const expected = 'bracelets';
    await browser.wait(ec.visibilityOf(element(by.id('bracelets'))));
    const value = await element(by.id('bracelets')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
  });

  it('should check Meredith', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('Meredith-box'))));
    await browser.sleep(500);
    await productVuesPageObjects.checkMeredithBox();
    await browser.sleep(500);
    const expected = 'Meredith';
    await browser.wait(ec.visibilityOf(element(by.id('Meredith'))));
    const value = await element(by.id('Meredith')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
    await browser.wait(ec.visibilityOf(element(by.id('Meredith-details-link'))));
    await browser.sleep(500);
    await productVuesPageObjects.clickOnMeredithDetails();
    await browser.sleep(500);
    const expected2 = 'boutique-title';
    await browser.wait(ec.visibilityOf(element(by.id('boutique-title'))));
    const value2 = await element(by.id('boutique-title')).getAttribute('id');
    expect(value2).to.eq(expected2);
  });

  after(async () => {
    browser.waitForAngularEnabled(true);
  });
});
