
// TO RUN A SPECIFIC TEST: npm test -- --spec=tests/13-getText.js

beforeEach(() => {
    browser.url('/Hidden-Elements/index.html');
});

describe('Get text from h1', () => {
    it('should return true for an h1 element', () => {
        const text = browser.getText('h1');
        console.log(text);
    });
});