async function ExtensionLeft(page) {
    const selector = 'tab-list-item.os-tab-bar-tab[data-id="f7c6d76366e44e0ca33c94b6"][data-icon-src="assembly"]';

    console.log("Waiting for the element to be available in the DOM...");
    await page.waitForSelector(selector, { timeout: 10000 });

    console.log("Trying to select the tab list item...");
    const tabListItem = await page.$(selector);

    if (tabListItem) {
        console.log('Tab list item selected successfully!');

        // Example: Extract text content from within the tab-list-item
        const tabText = await page.evaluate(el => el.querySelector('.os-tab-name').textContent.trim(), tabListItem);
        console.log('Tab text content:', tabText);

        // Example: Click on the tab if needed
        await tabListItem.click();
        console.log('Tab item clicked successfully!');
    } else {
        console.log('Tab list item not found.');
    }
}

module.exports = ExtensionLeft;




// const puppeteer = require('puppeteer');

// async function ExtensionLeft(page) {
//     // The rest of the function code
//     const selector = 'tab-list-item.os-tab-bar-tab[data-id="f7c6d76366e44e0ca33c94b6"][data-icon-src="assembly"]';

//     await page.waitForSelector(selector);
//     const tabListItem = await page.$(selector);

//     if (tabListItem) {
//         console.log('Tab list item selected!');
//         // Additional actions can be added here
//     } else {
//         console.log('Tab list item not found.');
//     }
// }

// module.exports = ExtensionLeft;



// async function ExtensionLeft(newPage) {
//     console.log("ExtensionLeft function started");

//     // Wait for the tab-list-item element to be available in the DOM
//     await newPage.waitForSelector('tab-list-item[data-id="e30941a9804ec64336179006"]', { visible: true });

//     const result = await newPage.evaluate(() => {
//         console.log("Inside evaluate function");

//         // Selector to find the tab-list-item element based on the data-id attribute
//         const tabItem = document.querySelector('tab-list-item[data-id="e30941a9804ec64336179006"]');

//         // Check if the element was found
//         if (!tabItem) {
//             console.error('ExtensionLeft tab item not found.');
//             return { success: false, reason: 'Element not found' };
//         }

//         // Ensure the element is visible
//         const isVisible = tabItem.offsetParent !== null;
//         console.log("Is the element visible?", isVisible);

//         if (isVisible) {
//             console.log("Found ExtensionLeft tab, attempting to click...");

//             // Alternative click method
//             const clickEvent = new MouseEvent('click', {
//                 view: window,
//                 bubbles: true,
//                 cancelable: true,
//             });
//             tabItem.dispatchEvent(clickEvent);

//             // Scroll the element into view smoothly and centered
//             tabItem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });

//             return { success: true, reason: 'Clicked successfully' };
//         } else {
//             console.error('ExtensionLeft tab item is not visible.');
//             return { success: false, reason: 'Element not visible' };
//         }
//     });

//     // Check the result of the evaluation
//     if (result.success) {
//         console.log("ExtensionLeft function completed successfully.");
//     } else {
//         console.log(`ExtensionLeft function failed: ${result.reason}`);
//     }
// }

// module.exports = ExtensionLeft;






// // SELECT ExtensionLeft TO CLICK OR UNCLICK
// async function ExtensionLeft(newPage) {
//     console.log("ExtensionLeft function");

//     await newPage.evaluate(() => {
//         // Selector to find the tab-list-item element based on the data-id attribute
//         const tabItem = document.querySelector('tab-list-item[data-id="e30941a9804ec64336179006"]');

//         if (tabItem) {
//             // Simulate a click on the tab-list-item
//             tabItem.click();
//             // Scroll the element into view smoothly and centered
//             tabItem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
//         } else {
//             console.error('ExtensionLeft not found.');
//         }
//     });
// }

// module.exports = ExtensionLeft;
