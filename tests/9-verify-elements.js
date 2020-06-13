
// TO RUN A SPECIFIC TEST: npm test -- --spec=tests/9-verify-elements.js

beforeEach(() => {
    browser.url('/Hidden-Elements/index.html');
});

describe('Test whether hidden elements exist', () => {
    it('Set to display: none; Still exists in DOM return true', () => {
        const el = browser.isExisting('#not-displayed');
        console.log(el);
        el.should.equal(true);
    });

    it('Set to visibility: hidden; Still exists in DOM return true', () => {
        const el = browser.isExisting('#visibility-hidden');
        console.log(el);
        el.should.equal(true);
    });

    it('Set to opacity: 0; Still exists in DOM return true', () => {
        const el = browser.isExisting('#zero-opacity');
        console.log(el);
        el.should.equal(true);
    });

    it('Header text always visible & should return true', () => {
        const el = browser.isExisting('h1');
        console.log(el);
        el.should.equal(true);
    });

    it('No such element should return false', () => {
        const el = browser.isExisting('#no-such-element');
        console.log(el);
        el.should.equal(true);
    });
});