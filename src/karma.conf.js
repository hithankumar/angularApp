// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
// const process = require('process');
// process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    customLaunchers:{
      HeadlessChrome:{
        base: 'ChromeHeadless',
        flags: [
          '--headless', 
          '--remote-debugging-port=9222',
          '--no-sandbox', 
          '--proxy-server=\'direct://\'',
          '--proxy-bypass-list=*']
  
      }
    },
    browsers: ['HeadlessChrome'],
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      //require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly', 'json-summary','text'],
      fixWebpackSourcePaths: true
    },
    browserNoActivityTimeout: 120000,
    reporters: ['progress'],
    port: 9877,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    concurrency: Infinity,
    // flags: [
    //   '--disable-web-security',
    //   '--disable-gpu',
    //   '--no-sandbox',
    //   '--disable-setuid-sandbox',
    //   '--remote-debugging-port=9222',
    //   '--proxy-bypass-list=*',
    //   '--proxy-server=\'http://localhost:8084\''
    // ]
  });
};