
browser
    .setViewportSize({
        height: 682,
        width: 1200
    })
    .url('https://webdriveruniversity.com')
    .getTitle().then(title => {
        console.log('Title is: ' + title)
    })
    .click('#contact-us')
    .pause(10000);
