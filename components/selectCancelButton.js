// SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
async function selectCancelButton(newPage) {
    console.log('SELECTING THE CANCEL ITEM ON THE LIST.');
    await newPage.evaluate(() => {
        const cancelButtonDiv = document.querySelector('div.ns-dialog-button-cancel.backbone-cancel');
        if (cancelButtonDiv) {
            cancelButtonDiv.click();
            cancelButtonDiv.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        } else {
            console.error('Cancel button not found.');
        }
    });
}

module.exports = selectCancelButton;
