// pasteIntoSketchFunction
async function pasteIntoSketchFunction(editOptions1, newPage) {
    const desiredOption = 'Paste into sketch';
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    try {
        console.log('pasteIntoSketchFunction')
        // console.log('Desired option:', desiredOption);

        // console.log('Searching for the index of the desired option...');
        const desiredOptionIndex = editOptions1.indexOf(desiredOption);

        if (desiredOptionIndex !== -1) {
            // console.log('Desired option found at index:', desiredOptionIndex);

            // console.log('Evaluating option element...');
            const optionElement = await newPage.evaluateHandle((index) => {
                const menuItems = document.querySelectorAll('.context-menu-item-span');
                return menuItems[index];
            }, desiredOptionIndex);

            if (optionElement) {
                console.log('Option element found:', desiredOption);
                await optionElement.click();
                console.log(`Clicked on ${desiredOption} option element.`);

                // Dispose of the handle to prevent memory leaks
                await optionElement.dispose();
            } else {
                console.error(`${desiredOption} option element not found.`);
            }
        } else {
            console.error(`${desiredOption} option not found.`);
        }

        // console.log('Function fully resolved.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

module.exports = pasteIntoSketchFunction;

