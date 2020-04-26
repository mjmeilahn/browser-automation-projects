
// RUN THIS TEST IN /TESTS FOLDER

describe('Verify WebDriver University links on Homepage work', () => {
    it('should link to Contact Us page when its button is clicked', done => {
        browser
            .url('http://webdriveruniversity.com')
            .click('#contact-us')
            .pause(3000)
    });

    it('should link to Login page when its button is clicked', done => {
        browser
            .url('http://webdriveruniversity.com')
            .click('#login-portal')

        const title = browser.getTitle()
        console.log('Title is: ' + title);
    });
});