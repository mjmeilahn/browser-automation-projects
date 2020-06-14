
// TO RUN A SPECIFIC TEST: npm test -- --spec=tests/14-waitForText.js

// waitForText() is a pause method much like browser.pause()

// waitForExist() needs two or three arguments: element, miliseconds
// EX: waitForExist('h1', 3000, true)

// waitForVisible() needs two arguments: element, miliseconds
// EX: waitForVisible('h1', 3000)

// waitForValue() just waits until there is text in the selector

// waitUntil() is a custom wait method where you can specify what return value you expect, wait interval, and custom fail messages

beforeEach(() => {
    browser
        .url('/Accordion/index.html')
        .setViewportSize({
            height: 700,
            width: 1400
        });
});

describe('Verify the correct text appears on the accordion page', () => {

    // waitForText
    // it('Verify loading complete text is visible after a set duration of time', () => {
    //     browser.pause(2000);

    //     const el = $('#hidden-text');

    //     console.log(el.getText());
    //     el.waitForText(1000);

    //     while (el.getText() !== 'LOADING COMPLETE.') {
    //         browser.pause(1000);
    //     }

    //     console.log(el.getText());
    // });

    // it('Verify text exists within the loading div container', () => {
    //     browser.pause(2000);

    //     const text = browser.waitForValue('#hidden-text', 2000);
    //     console.log(text);
    // });

    // waitUntil
    it('Verify loading complete text is visible after a set duration of time', () => {
        browser.pause(2000);
        browser.waitUntil(() => {
            return browser.getText('#hidden-text') === 'LOADING COMPLETE.';
        }, 500, 'I could not wait that long');

        console.log(browser.getText('#hidden-text'));
    });

    it('Verify loading complete text is visible after a set duration of time', () => {
        browser.pause(2000);
        browser.waitUntil(() => {
            return browser.getText('#hidden-text') === 'LOADING COMPLETE.';
        }, 10000, 'Could not wait any longer');

        console.log(browser.getText('#hidden-text'));
    });
});
