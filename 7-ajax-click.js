
// TO RUN A SPECIFIC TEST: npm test -- --spec=tests/7-ajax-click.js


describe('Test that the button is clickable once AJAX loader completes loading', () => {
    it('Attempt to click button ASAP', done => {
        browser.url('/Ajax-Loader/index.html');
        browser.click('#button1');
    });

    it('Attempt to click button after 7 seconds', done => {
        browser.url('/Ajax-Loader/index.html');
        browser.pause(7000);
        browser.click('#button1');
        browser.pause(7000);
        browser.debug();
    });
});