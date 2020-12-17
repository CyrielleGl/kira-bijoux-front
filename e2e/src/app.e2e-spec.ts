import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { expect } from 'chai';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).equal('kira-bijoux app is running!');
  });

  afterEach(async () => {});
});
