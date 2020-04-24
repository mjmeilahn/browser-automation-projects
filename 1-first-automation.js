const webDriverIO = require('webdriverio');
const options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
const client = webDriverIO.remote(options);

client.init()
      .url('https://webdriveruniversity.com')
      .click('#login-portal')
      .getTitle().then(title => {
          console.log('Title is: ' + title)
      })
      .end();
