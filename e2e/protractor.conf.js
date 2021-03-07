// @ts-nocheck
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// @ts-ignore
const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
// @ts-ignore
const { browser, WebDriver } = require('protractor');

/**
 * @type { import("protractor").Config }
 */
// import { browser } from 'protractor';

exports.config = {
  allScriptsTimeout: 20000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
     args: ["--start-maximized"]
    },
    // WebDriver: new ChromeDriver(chromeOptions)
  },
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:4200/',
  framework: 'mocha',
  mochaOpts: {
    reporter: 'spec',
    slow: 3000,
    timeout: 720000
  },

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    // browser.manage().window().maximize();
    // browser.executeScript('document.body.className += " notransition";');
    const chai = require('chai');
    const chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    const chaiString = require('chai-string');
    chai.use(chaiString);
    // @ts-ignore
    global.chai = chai;
  }
};