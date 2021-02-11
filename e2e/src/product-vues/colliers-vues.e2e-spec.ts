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

  // COLLIERS

  it('should load colliers page', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('colliers-link'))));
    await browser.sleep(500);
    await routingPageObjects.clickOnColliersRoute();
    await browser.sleep(500);
    const expected = 'colliers';
    await browser.wait(ec.visibilityOf(element(by.id('colliers'))));
    const value = await element(by.id('colliers')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
  });

  it('should check Aylee', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('Aylee-box'))));
    await browser.sleep(500);
    await productVuesPageObjects.checkAyleeBox();
    await browser.sleep(500);
    const expected = 'Aylee';
    await browser.wait(ec.visibilityOf(element(by.id('Aylee'))));
    const value = await element(by.id('Aylee')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
    await browser.wait(ec.visibilityOf(element(by.id('Aylee-details-link'))));
    await browser.sleep(500);
    await productVuesPageObjects.clickOnAyleeDetails();
    await browser.sleep(500);
    const expected2 = 'boutique-title';
    await browser.wait(ec.visibilityOf(element(by.id('boutique-title'))));
    const value2 = await element(by.id('boutique-title')).getAttribute('id');
    expect(value2).to.eq(expected2);
  });

  it('should reload colliers page', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('colliers-link'))));
    await browser.sleep(500);
    await routingPageObjects.clickOnColliersRoute();
    await browser.sleep(500);
    const expected = 'colliers';
    await browser.wait(ec.visibilityOf(element(by.id('colliers'))));
    const value = await element(by.id('colliers')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
  });

  // SHOULD CHECK DAENERYS WITH A STOCK NULL - COMMENT THIS BLOCK IF STOCK IS NOT NULL

  it('should check Daenerys', async () => {
    // Select Daenerys Box
    await browser.wait(ec.visibilityOf(element(by.id('Daenerys-box'))));
    await browser.sleep(500);
    await productVuesPageObjects.checkDaenerysBox();
    const expected = 'Daenerys';
    await browser.wait(ec.visibilityOf(element(by.id('Daenerys'))));
    const value = await element(by.id('Daenerys')).getAttribute('id');
    expect(value).to.eq(expected);

    // Go to Daenerys Details
    await browser.wait(ec.visibilityOf(element(by.id('Daenerys-details-link'))));
    await browser.sleep(500);
    await productVuesPageObjects.clickOnDaenerysDetails();
    const expected2 = 'boutique-title';
    await browser.wait(ec.visibilityOf(element(by.id('boutique-title'))));
    const value2 = await element(by.id('boutique-title')).getAttribute('id');
    expect(value2).to.eq(expected2);

    // Open Modal Alert Stock
    await browser.wait(ec.visibilityOf(element(by.id('alert-stock'))));
    await browser.sleep(500);
    await productVuesPageObjects.clickOnAlertStock();
    await browser.sleep(500);
    const expected3 = 'modal-subtitle';
    await browser.wait(ec.visibilityOf(element(by.id('modal-subtitle'))));
    const value3 = await element(by.id('modal-subtitle')).getAttribute('id');
    expect(value3).to.eq(expected3);

    // Close Modal Alert Stock
    await browser.executeScript('window.scrollTo(0, document.body.scrollHeight);').then(async () => {
      await browser.wait(ec.visibilityOf(element(by.id('modal-footer'))));
      await productVuesPageObjects.closeModal();
    });
    await browser.sleep(500);
    const expected4 = 'alert-stock';
    await browser.wait(ec.visibilityOf(element(by.id('alert-stock'))));
    const value4 = await element(by.id('alert-stock')).getAttribute('id');
    expect(value4).to.eq(expected4);
  });

  after(async () => {
    browser.waitForAngularEnabled(true);
  });
});
