const cd = require('chromedriver');
console.log("cd.path:", cd.path)
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

// const driver = new webdriver.Builder()
//     .forBrowser('chrome')
//     .build();
driver.get('http://www.google.com').then(function(){
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver\n').then(function(){
    driver.getTitle().then(function(title) {
      console.log(title)
      if(title === 'webdriver - Google Search') {
         console.log('Test passed');
      } else {
         console.log('Test failed');
      }
     driver.quit();
    });
  });
});