
// TO RUN A SPECIFIC TEST: npm test -- --spec=tests/9-verify-elements.js

beforeEach(() => {
    browser.url('/Hidden-Elements/index.html');
});

describe('Test whether hidden elements exist', () => {

    // EXISTS IN THE DOM
    it('Set to display: none; Still exists in DOM return true', () => {
        const el = browser.isExisting('#not-displayed');
        el.should.equal(true);
    });

    it('Set to visibility: hidden; Still exists in DOM return true', () => {
        const el = browser.isExisting('#visibility-hidden');
        el.should.equal(true);
    });

    it('Set to opacity: 0; Still exists in DOM return true', () => {
        const el = browser.isExisting('#zero-opacity');
        el.should.equal(true);
    });

    it('Header text always visible & should return true', () => {
        const el = browser.isExisting('h1');
        el.should.equal(true);
    });

    it('No such element should return false', () => {
        const el = browser.isExisting('#no-such-element');
        el.should.equal(true);
    });



    // IS VISIBLE
    it('Should be false, set to display: none', () => {
        const el = browser.isVisible('#not-displayed');
        el.should.equal(true);
    });

    it('Should be false, set to visibility: hidden', () => {
        const el = browser.isVisible('#visibility-hidden');
        el.should.equal(true);
    });

    it('Should be false, set to opacity: 0', () => {
        const el = browser.isVisible('#zero-opacity');
        el.should.equal(true);
    });

    it('Header text always visible & should return true', () => {
        const el = browser.isVisible('h1');
        el.should.equal(true);
    });

    it('No such element should return false', () => {
        const el = browser.isVisible('#no-such-element');
        el.should.equal(true);
    });
});