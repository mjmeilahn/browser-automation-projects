
describe('Verify WebDriver University links on Homepage work', () => {
    it('should link to Contact Us page when its link is clicked', function () {
        return browser
                .setViewportSize({
                    height: 682,
                    width: 1200
                })
                .url('https://webdriveruniversity.com')
                .getTitle().then(title => {
                    console.log('Title is: ' + title)
                })
                .click('#contact-us')
                .pause(10000)
    });
});