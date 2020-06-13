
// TO RUN A SPECIFIC TEST: npm test -- --spec=tests/10-focus-elements.js

// "HAS FOCUS" IS EXACTLY LIKE ":focus"

beforeEach(() => {
    browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
});

describe('Test Radio buttons page', () => {
    it('should be able to focus on the radio button elements', () => {
        browser.click('#checkboxes label:nth-of-type(1)');

        const el = browser.hasFocus('#checkboxes label:nth-of-type(1) [type]');
        el.should.equal(true);

        const elem = browser.hasFocus('#checkboxes label:nth-child(5) [type]');
        elem.should.equal(false);
    });
});