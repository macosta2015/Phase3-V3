// Function to handle iframe
async function assemblySelectButton(newPage) {
    console.log("assemblySelectButton");

    console.log('SELECTING THE TAB LIST ITEM.');

    // Wait for the page to load completely
    await new Promise(resolve => setTimeout(resolve, 5000)); // Adjust the timeout if necessary

    // Log the current URL to ensure we are on the right page
    const currentUrl = newPage.url();
    console.log('Current URL:', currentUrl);

    // Log the full HTML of the page for debugging
    const pageContent = await newPage.content();
    console.log('Page Content:', pageContent);

    // Check for iframes and switch context if necessary
    const frames = newPage.frames();
    let frame = null;

    for (const f of frames) {
        const frameContent = await f.content();
        if (frameContent.includes('tab-list-item')) {
            frame = f;
            break;
        }
    }

    if (frame) {
        console.log('Switching to iframe context.');
        await frame.waitForSelector('tab-list-item[data-id="f3cf3888a94132b28fcd2520"]', { timeout: 10000 });
    } else {
        console.error('Iframe with the tab list item not found.');
        return;
    }

    // Ensure the element is visible and interactable
    const isVisible = await frame.evaluate(() => {
        const tabListItem = document.querySelector('tab-list-item[data-id="f3cf3888a94132b28fcd2520"]');
        if (tabListItem) {
            const rect = tabListItem.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0;
        }
        return false;
    });

    if (!isVisible) {
        console.error('Tab list item is not visible or interactable.');
        return;
    }

    // Click and scroll into view
    await frame.evaluate(() => {
        const tabListItem = document.querySelector('tab-list-item[data-id="f3cf3888a94132b28fcd2520"]');
        if (tabListItem) {
            console.log('Tab list item found.');
            tabListItem.click();
            tabListItem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        } else {
            console.error('Tab list item not found.');
        }
    });
}

module.exports = assemblySelectButton;
