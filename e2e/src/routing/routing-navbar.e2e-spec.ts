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

  it('should open a-propos dropdown', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('a-propos-dropdown'))));
    await browser.sleep(500);
    await routingPageObjects.clickOnAProposRoute();
    await browser.sleep(500);
    const expected = 'entretien-bijoux-link';
    await browser.wait(ec.visibilityOf(element(by.id('entretien-bijoux-link'))));
    const value = await element(by.id('entretien-bijoux-link')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
   });

  it('should load entretien bijoux page', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('entretien-bijoux-link'))));
    await browser.sleep(500);
    await routingPageObjects.clickOnEntretienRoute();
    await browser.sleep(500);
    const expected = 'entretien-bijoux';
    await browser.wait(ec.visibilityOf(element(by.id('entretien-bijoux'))));
    const value = await element(by.id('entretien-bijoux')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
   });

  it('should re-open a-propos dropdown', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('a-propos-dropdown'))));
    await browser.sleep(500);
    await routingPageObjects.clickOnAProposRoute();
    await browser.sleep(500);
    const expected = 'marque-link';
    await browser.wait(ec.visibilityOf(element(by.id('marque-link'))));
    const value = await element(by.id('marque-link')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
   });

  it('should load la marque page', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('marque-link'))));
    await browser.sleep(500);
    await routingPageObjects.clickOnLaMarqueRoute();
    await browser.sleep(500);
    const expected = 'la-marque';
    await browser.wait(ec.visibilityOf(element(by.id('la-marque'))));
    const value = await element(by.id('la-marque')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
   });

  it('should re-open a-propos dropdown', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('a-propos-dropdown'))));
    await browser.sleep(500);
    await routingPageObjects.clickOnAProposRoute();
    await browser.sleep(500);
    const expected = 'lithotherapie-link';
    await browser.wait(ec.visibilityOf(element(by.id('lithotherapie-link'))));
    const value = await element(by.id('lithotherapie-link')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
   });

  it('should load lithotherapie page', async () => {
    await browser.wait(ec.visibilityOf(element(by.id('lithotherapie-link'))));
    await browser.sleep(500);
    await routingPageObjects.clickOnLithotherapieRoute();
    await browser.sleep(500);
    const expected = 'lithotherapie';
    await browser.wait(ec.visibilityOf(element(by.id('lithotherapie'))));
    const value = await element(by.id('lithotherapie')).getAttribute('id');
    expect(value).to.eq(expected);
    await browser.sleep(500);
   });

  after(async () => {
    browser.waitForAngularEnabled(true);
  });
});
