// SELECT OK TO CLICK OR UNCLICK
async function selectOkButton(newPage) {
    console.log("selectOkButton");

    await newPage.evaluate(() => {
        const okButtonDiv = document.querySelector('div.ns-dialog-button-ok.button-ok');
        if (okButtonDiv) {
            okButtonDiv.click();
            okButtonDiv.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        } else {
            console.error('OK button not found.');
        }
    });
}

module.exports = selectOkButton;

