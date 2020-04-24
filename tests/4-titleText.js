
browser
    .url('https://webdriveruniversity.com')
    .click('#login-portal')
    .getTitle().then(title => {
        console.log('Title is: ' + title)
    });
