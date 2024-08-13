// editIntoSketchFunction.js
async function editIntoSketchFunction(editOptions1, newPage) {
    console.log('editIntoSketchFunction')

    try {
        const desiredOption2 = 'Edit…'; // The desired option to choose
        // console.log('Desired edit option:', desiredOption2);

        // Find the index of the desired option
        const desiredOptionIndex = editOptions1.indexOf(desiredOption2);
        // console.log('Index of desired option:', desiredOptionIndex);

        if (desiredOptionIndex !== -1) {
            // console.log('Desired edit option found.');

            // Evaluate the desired option element in the context menu
            const renameOptionElement = await newPage.evaluateHandle((index) => {
                const menuItems = document.querySelectorAll('.context-menu-item-span');
                return menuItems[index];
            }, desiredOptionIndex);

            if (renameOptionElement) {
                // console.log('Option element found:', desiredOption2);

                // Click on the desired option element
                await renameOptionElement.click();
                // console.log(`Clicked on ${desiredOption2} option element.`);
            } else {
                console.error(`${desiredOption2} option element not found.`);
            }
        } else {
            console.error(`${desiredOption2} option not found.`);
        }

        // console.log('Function fully resolved.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

module.exports = editIntoSketchFunction;
