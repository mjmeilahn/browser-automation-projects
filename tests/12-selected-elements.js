
// TO RUN A SPECIFIC TEST: npm test -- --spec=tests/12-selected-elements.js

// "SELECTED" IS EXACTLY LIKE ":selected" IN CSS

beforeEach(() => {
    browser
        .url('/Dropdown-Checkboxes-RadioButtons/index.html')
        .setViewportSize({
            height: 700,
            width: 1400
        });
});

describe('Test Selected Drop-down Menus, Checkboxes & Radio Buttons', () => {
    it('Drop-down item Java is selected, should return true', () => {
        const el = browser.isSelected('option[value="java"]');
        el.should.equal(true);
    });

    it('Drop-down item Maven is not selected, should return false', () => {
        const el = browser.isSelected('option[value="maven"]');
        el.should.equal(false);
    });

    it('Option2 is not selected, should return false', () => {
        const el = browser.isSelected('input[value="option-2"]');
        el.should.equal(false);
    });

    it('Option3 is selected, should return true', () => {
        const el = browser.isSelected('input[value="option-3"]');
        el.should.equal(true);
    });

    it('Radio button pumpkin is selected, should return true', () => {
        const el = browser.isSelected('input[value="pumpkin"]');
        el.should.equal(true);
    });
});