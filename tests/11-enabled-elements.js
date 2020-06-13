
// TO RUN A SPECIFIC TEST: npm test -- --spec=tests/11-enabled-elements.js

// "IS ENABLED" MEANS IT CAN BE USED FOR INTERACTION, DROP-DOWN, CHECKBOX, BUTTONS, ETC.

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
        const isEnabled = browser.isEnabled('option[value="orange"]');
        console.log(isEnabled);

        isEnabled.should.equal(false);
    });

    it('Drop-down item grape is enabled, should return true', () => {
        const isEnabled = browser.isEnabled('option[value="grape"]');
        console.log(isEnabled);

        isEnabled.should.equal(true);
    });

    it('Option 2 is enabled, should return true', () => {
        const isEnabled = browser.isEnabled('input[value="option-2"]');
        console.log(isEnabled);

        isEnabled.should.equal(true);
    });

    it('Radio button pumpkin is enabled, should return true', () => {
        const isEnabled = browser.isEnabled('input[value="pumpkin"]');
        console.log(isEnabled);

        isEnabled.should.equal(true);
    });

    it('Radio button cabbage is disabled, should return false', () => {
        const isEnabled = browser.isEnabled('input[value="cabbage"]');
        console.log(isEnabled);

        isEnabled.should.equal(false);
    });
});