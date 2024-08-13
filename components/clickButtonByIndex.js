async function clickButtonByIndex(newPage, index) {
    await newPage.evaluate((index) => {
        const button = document.querySelectorAll('.os-list-item-name')[index];
        if (button) {
            button.click();
        } else {
            console.error(`Button at index ${index} not found.`);
        }
    }, index);
}

module.exports = { clickButtonByIndex };
