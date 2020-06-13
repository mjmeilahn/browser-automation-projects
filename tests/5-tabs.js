// const assert = require('assert');
// const expect = require('chai').expect;
// const should = require('chai').should();


// TO RUN A SPECIFIC TEST: npm test -- --spec=tests/5-tabs.js

describe('Verify WebDriver University links on Homepage work', () => {
    it('should link to Contact Us page when its button is clicked', done => {
        browser
            .url('/')
            .click('#contact-us')
            .pause(1000);

        const tabIDs = browser.getTabIds();

        browser
            .switchTab(tabIDs[1])
            .pause(3000);

        browser
            .close();
    });

    it('should link to Login page when its button is clicked', done => {
        browser
            .url('/')
            .click('#login-portal');

        const title = browser.getTitle();

        // OLD NODE ASSERTION, KEEP FOR HISTORY
        // NODE ASSERTIONS ARE NOT AS SEMANTIC IN CODE
        // OR GIVE SEMANTIC ERROR MESSAGES IN CONSOLE
        // assert.equal(title, 'WebDriverUniversity.com');

        // CHAI EXPECT VS. SHOULD, DOES THE SAME THING
        // expect(title).to.equal('WebDriverUniversity.com');
        title.should.equal('WebDriverUniversity.com');

        console.log('Title is: ' + title);
    });
});