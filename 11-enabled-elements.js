
// TO RUN A SPECIFIC TEST: npm test -- --spec=tests/11-enabled-elements.js

// "IS ENABLED" MEANS IT CAN BE USED FOR INTERACTION, DROP-DOWN, CHECKBOX, BUTTONS, ETC. OPPOSITE OF ":disabled"

beforeEach(() => {
    browser
        .url('/Dropdown-Checkboxes-RadioButtons/index.html')
        .setViewportSize({
            height: 600,
            width: 1440
        });
});

describe('Test Enabled Drop-down Menus, Checkboxes & Radio Buttons', () => {
    it('Drop-down item orange is disabled, should return false', () => {
        const el = browser.isEnabled('option[value="orange"]');
        el.should.equal(false);
    });

    it('Drop-down item grape is enabled, should return true', () => {
        const el = browser.isEnabled('option[value="grape"]');
        el.should.equal(true);
    });

    it('Option 2 is enabled, should return true', () => {
        const el = browser.isEnabled('input[value="option-2"]');
        el.should.equal(true);
    });

    it('Radio button pumpkin is enabled, should return true', () => {
        const el = browser.isEnabled('input[value="pumpkin"]');
        el.should.equal(true);
    });

    it('Radio button cabbage is disabled, should return false', () => {
        const el = browser.isEnabled('input[value="cabbage"]');
        el.should.equal(false);
    });
});