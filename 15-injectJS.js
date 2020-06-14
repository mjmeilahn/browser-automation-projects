
// TO RUN A SPECIFIC TEST: npm test -- --spec=tests/15-injectJS.js

beforeEach(() => {
    browser
        .url('https://www.w3schools.com/html/html5_video.asp')
        .setViewportSize({
            height: 700,
            width: 1400
        });
});

// Custom browser command, this of this as a function under a namespace
browser.addCommand('isVideoPaused', () => {

    // browser.execute() passes any JS to the browser
    // EX: the console.log() will be echoed in the browser console
    const isPaused = browser.execute(() => {
        console.log("I'm in the browser console!");

        const video = document.querySelector('#video1');
        return video.paused;
    });

    return isPaused.value;
});

describe('Video test', () => {
    it('video should be paused on page load', () => {
        browser.pause(3000);

        const isPaused = browser.isVideoPaused();
        isPaused.should.equal(true);

        browser.pause(3000);
    });

    it('should be re-sizeable', () => {
        const videoWidth = browser.execute(() => {
            const video = document.querySelector('#video1');
            return video.style.width = '300px';
        });

        browser.pause(3000);
    });
});