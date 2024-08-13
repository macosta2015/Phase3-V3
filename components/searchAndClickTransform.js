// searchAndClickTransform.js
async function searchAndClickTransform(newPage) {
    try {
        console.log('searchAndClickTransform')

        // console.log('Clicking the command search trigger...');
        await newPage.click('button.command-search-trigger');
        await newPage.waitForSelector('.os-search-box-input', { visible: true });

        // console.log('Typing "transform" into the search input field...');
        await newPage.type('.os-search-box-input', 'transform');

        // console.log('Pressing Enter to search for "transform"...');
        await newPage.keyboard.press('Enter');
        // await newPage.waitForSelector('.context-menu-item-span', { visible: true });

        // console.log('Completed the search and click process.');

    } catch (error) {
        console.error('An error occurred:', error);
    }
}

module.exports = searchAndClickTransform;

