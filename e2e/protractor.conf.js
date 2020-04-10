// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { browser } = require('protractor');

const jasmineReporters = require('jasmine-reporters');
const fs = require('fs-extra');
const HTMLReport = require('protractor-html-reporter-2');
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const detailsReportDirectory = './e2e/reports' + '/detailReport';
const ScreenshotAndStackReporter = new HtmlScreenshotReporter({
  dest: detailsReportDirectory,
  filename: 'E2ETestingReport.html',
  reportTitle: "E2E Testing Report",
  showSummary: true,
  reportOnlyFailedSpecs: false,
  captureOnlyFailedSpecs: true,
});

exports.config = {
 allScriptsTimeout: 30000,
 specs: [
   './src/**/*.e2e-spec.ts'
 ],
 capabilities: {
   /**
    * If need to run e2e without opening the browser then uncomment the chormeoptions
    */
  // chromeOptions: {
  //   args: [ "--headless" ]
  // },
   'browserName': 'chrome'
 },
 directConnect: true,
 baseUrl: 'http://localhost:4200/',
 framework: 'jasmine',
 jasmineNodeOpts: {
   showColors: true,
   defaultTimeoutInterval: 30000,
   print: function() {}
 },
 beforeLaunch: function () {
  return new Promise(function (resolve) {
      ScreenshotAndStackReporter.beforeLaunch(resolve);
  });
},
 onPrepare() {
   require('ts-node').register({
     project: require('path').join(__dirname, './tsconfig.json')
   });

   fs.emptyDir('e2e/reports', (err) => { err && console.log(err); });

  jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
     consolidateAll: true,
     savePath: './e2e/reports/dashboardReports',
     filePrefix: 'e2exmlresults'
   }));

  const dashboardReportDirectory = './e2e/reports' + '/dashboardReports';

  if (!fs.existsSync(dashboardReportDirectory)) {
      fs.mkdirSync(dashboardReportDirectory);
  }
   
  jasmine.getEnv().addReporter({specDone: function (result) {
       if (result.status === 'failed') {
         browser.getCapabilities().then(function (caps) {
           const browserName = caps.get('browserName');

           browser.takeScreenshot().then(function (png) {
             const stream = fs.createWriteStream(dashboardReportDirectory + '/' + browserName + '-' + result.fullName + '.png');
             stream.write(new Buffer(png, 'base64'));
             stream.end();
           });
         });
       }
     }
  });

  jasmine.getEnv().addReporter(ScreenshotAndStackReporter);
 },

 //HTMLReport called once tests are finished
 onComplete: function() {
    
       const testConfig = {
         reportTitle: 'Protractor Test Report',
         outputPath: './e2e/reports/dashboardReports',
         outputFilename: 'ProtractorTestReport',
         screenshotPath: './',
         testBrowser: 'chrome',
         browserVersion: '80.0.3987.149',
         modifiedSuiteName: false,
         screenshotsOnlyOnFailure: true,
         testPlatform: 'windows'
       };
       new HTMLReport().from('e2e/reports/dashboardReports/e2exmlresults.xml', testConfig);
 }
};