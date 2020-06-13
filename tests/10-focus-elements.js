
// TO RUN A SPECIFIC TEST: npm test -- --spec=tests/10-focus-elements.js

beforeEach(() => {
    browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
});

describe('Test Radio buttons page', () => {
    it('should be able to focus on the radio button elements', () => {
        browser.click('#checkboxes label:nth-of-type(1)');

        const checkboxOne = browser.hasFocus('#checkboxes label:nth-of-type(1) [type]');
        checkboxOne.should.equal(true);

        const checkboxTwo = browser.hasFocus('#checkboxes label:nth-child(5) [type]');
        checkboxTwo.should.equal(false);
    });
});