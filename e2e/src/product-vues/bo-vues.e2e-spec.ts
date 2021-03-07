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

  // BOUCLES D'OREILLES

  it('should load bo page', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('bo-link'))));
    await browser.sleep(500);
    await routingPageObjects.clickOnBORoute();
    await browser.sleep(500);
    const expected = 'bo';
    await browser.wait(ec.visibilityOf(element(by.id('bo'))));
    const value = await element(by.id('bo')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
  });

  it('should check Marie', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('Marie-box'))));
    await browser.sleep(500);
    await productVuesPageObjects.checkMarieBox();
    await browser.sleep(500);
    const expected = 'Marie';
    await browser.wait(ec.visibilityOf(element(by.id('Marie'))));
    const value = await element(by.id('Marie')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
    await browser.wait(ec.visibilityOf(element(by.id('Marie-details-link'))));
    await browser.sleep(500);
    await productVuesPageObjects.clickOnMarieDetails();
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
