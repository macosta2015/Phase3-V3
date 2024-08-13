// newSketch.js
async function newSketch(newPage) {
    try {
        // Wait for the Sketch button to appear and click it
        // console.log('Waiting for the Sketch button to appear...');
        await newPage.waitForSelector('div.toolset [command-id="newSketch"]', { visible: true });
        // console.log('Sketch button found. Clicking on it...');
        await newPage.click('div.toolset [command-id="newSketch"]');
        // console.log('Clicked on the Sketch button.');

        // Click on the Top view button
        await newPage.click('div[data-id="M9bsVubdGCsYO08ys"][data-bs-original-title="Top"]');

        // Wait for 2 seconds to ensure the dialog appears
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Click the OK button in the dialog
        await newPage.click('div.ns-dialog-button-ok.button-ok');

        console.log('END TEST');
    } catch (error) {
        console.error('An error occurred during the new sketch process:', error);
    }
}

module.exports = { newSketch };
