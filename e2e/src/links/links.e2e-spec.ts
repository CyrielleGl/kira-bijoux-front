import { browser, element, logging, by, ExpectedConditions as ec } from 'protractor';

import chai = require('chai');
const expect = chai.expect;

describe('workspace-project App', () => {
  // let page: AppPage;

  beforeEach( async () => {
    await browser.get('/');
    browser.waitForAngularEnabled(false);
    await browser.wait(ec.visibilityOf(element(by.id('home'))));
  });

  it('should display welcome message', async () => { });

  afterEach(async () => {});
});
