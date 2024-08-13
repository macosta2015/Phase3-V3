// copySketchFunction.js
async function copySketchFunction(editOptions3, newPage) {
    try {
        const desiredOption = 'Copy sketch'; // The desired option to choose
        console.log('copySketchFunction')
        // console.log('Desired option:', desiredOption);

        // Find the index of the desired option
        const desiredOptionIndex = editOptions3.indexOf(desiredOption);
        // console.log('Index of desired option:', desiredOptionIndex);

        if (desiredOptionIndex !== -1) {
            // console.log('Desired option found.');

            // Evaluate the desired option element in the context menu
            const optionElement = await newPage.evaluateHandle((index) => {
                const menuItems = document.querySelectorAll('.context-menu-item-span');
                return menuItems[index];
            }, desiredOptionIndex);

            if (optionElement) {
                // console.log('Option element found:', desiredOption);

                // Click on the desired option element
                await optionElement.click();
                console.log(`Clicked on ${desiredOption} option element.`);
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

module.exports = copySketchFunction;
