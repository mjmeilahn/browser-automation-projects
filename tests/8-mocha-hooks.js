

// TO RUN A SPECIFIC TEST: npm test -- --spec=tests/8-mocha-hooks.js
// MOCHA HOOKS: beforeEach, describe

const firstName = '[name="first_name"]';
const lastName = '[name="last_name"]';
const email = '[name="email"]';
const message = '[name="message"]';
const submit = '[type="submit"]';

beforeEach(() => {
    browser.url('/Contact-Us/contactus.html');
});

describe('Contact Us form at WebDriverUniversity', () => {
    beforeEach(() => {
        console.log('nested beforeEach()');
    });

    it('should submit form correctly', () => {
        browser
            .setValue(firstName, 'John')
            .setValue(lastName, 'Doe')
            .setValue(email, 'johndoe@telsidfnasgalubg.com')
            .setValue(message, 'This is a test')
            .click(submit);
    });

    it('should not submit form if all fields are required', () => {
        browser
            .click(submit);
    });
});