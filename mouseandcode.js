// August 12th of 2024

const puppeteer = require('puppeteer');
require('dotenv').config();

const { launchBrowserAndNavigateToDocument } = require('./components/launchBrowserAndNavigate.js');
const { newSketch } = require('./components/newSketch.js');
const { clickButtonByIndex } = require('./components/clickButtonByIndex.js');
const copySketchFunction = require('./components/copySketchFunction.js');
const pasteIntoSketchFunction = require('./components/pasteIntoSketchFunction.js');
const editIntoSketchFunction = require('./components/editIntoSketchFunction.js');
const renameIntoSketchFunction = require('./components/renameIntoSketchFunction.js');
const searchAndClickTransform = require('./components/searchAndClickTransform.js');
const searchAndClickCustomExtrude2 = require('./components/searchAndClickCustomExtrude2.js');
const searchAndClickExtrude = require('./components/searchAndClickExtrude.js');
const selectCancelButton = require('./components/selectCancelButton.js');
const selectOkButton = require('./components/selectOkButton.js');
const assemblySelectButton = require('./components/assemblySelectButton.js');
const { performRightClickOptionByTitle } = require('./components/performRightClickOptionByTitle.js');
const waitForEnter = require('./components/waitForEnter.js');
require('events').EventEmitter.defaultMaxListeners = 20; // Set the maximum number of listeners



//////////////////
const ExtensionLeft = require('./components/ExtensionLeft.js');  // Ensure the path is correct
/////////////////


(async () => {
    try {

        // Launch browser and navigate to the document
        const newPage = await launchBrowserAndNavigateToDocument(); // Ensure this returns a newPage object



        //////////////////
        console.log("ExtensionLeft ");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        await ExtensionLeft(newPage);
        console.log("ExtensionLeft");
        await waitForEnter();

        //////////////////



        //Working on (2) Extrude 1(4.00)
        ////////////////////////////////////////////////////////////////////////////
        const selector = 'div[data-id="XgmGAQ7RqnVg1wa8"]'; // Replace with the appropriate selector
        const title = '(2) Extrude 1(4.00) did not regenerate properly: Select face or sketch region to extrude.'; // Replace with the desired title
        const editOptions3 = await performRightClickOptionByTitle(newPage, selector, title);
        console.log("AAAAAAAAAA");
        console.log(''); // This logs an empty line, effectively skipping a line


        await waitForEnter();
        console.log("BBBBBBBBBB");
        console.log(''); // This logs an empty line, effectively skipping a line
        editIntoSketchFunction(editOptions3, newPage);
        ////////////////////////////////////////////////////////////////////////////


        console.log("Press enter when ready");
        await waitForEnter();
        await selectOkButton(newPage);
        console.log("Pressed enter");


        ///////WORKING, NEED TO CHANGE THE (3) Extrude Sketch(1.03)
        ////////////////////////////////////////////////////////////////////////////
        console.log("CCCCCCCCCC");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        await selectOkButton(newPage);
        console.log("DDDDDDDDDD");
        console.log(''); // This logs an empty line, effectively skipping a line
        const selector7 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const title7 = '(3) Extrude Sketch(1.03) did not regenerate properly: Select a sketch plane.'; // Replace with the desired title
        const editOptions7 = await performRightClickOptionByTitle(newPage, selector7, title7);
        console.log("EEEEEEEEEE");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("FFFFFFFFFF");
        console.log(''); // This logs an empty line, effectively skipping a line
        editIntoSketchFunction(editOptions7, newPage);
        ////////////////////////////////////////////////////////////////////////////


        console.log("GGGGGGGGGG");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        await selectOkButton(newPage);
        console.log("HHHHHHHHHH");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("IIIIIIIIII");
        console.log(''); // This logs an empty line, effectively skipping a line



        //Working on (4) Extrude 2
        ////////////////////////////////////////////////////////////////////////////
        const selector8 = 'div[data-id="mypaWa+39o7YTdnA"]'; // Replace with the appropriate selector
        const title8 = '(4) Extrude 2 did not regenerate properly: Select face or sketch region to extrude.';
        const editOptions8 = await performRightClickOptionByTitle(newPage, selector8, title8);
        console.log("JJJJJJJJJJ");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("KKKKKKKKKK");
        console.log(''); // This logs an empty line, effectively skipping a line
        editIntoSketchFunction(editOptions8, newPage);
        ////////////////////////////////////////////////////////////////////////////


        console.log("LLLLLLLLLLL");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        await selectOkButton(newPage);
        console.log("MMMMMMMMMMM");
        console.log(''); // This logs an empty line, effectively skipping a line


        //Working on (2) Extrude 1(4.00)
        const selector1 = 'div[data-id="Dg4JdGx6jlZTm4XD"]'; // Replace with the appropriate selector
        const title1 = '(1) Initial Sketch'; // Replace with the desired title
        console.log('Right-clicking on the specified element.');
        const editOptions1 = await performRightClickOptionByTitle(newPage, selector1, title1);
        console.log("NNNNNNNNNNN");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("OOOOOOOOOOO");
        console.log(''); // This logs an empty line, effectively skipping a line
        copySketchFunction(editOptions1, newPage);
        // Select sketch to click or unclick, good code to select and unselect
        await waitForEnter();
        const title20 = '(3) Extrude Sketch(1.03)'; // Replace with the desired title
        const editOptions20 = await performRightClickOptionByTitle(newPage, selector7, title20);
        //Testing code
        console.log("PPPPPPPPPP");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("QQQQQQQQQQ");
        console.log(''); // This logs an empty line, effectively skipping a line
        pasteIntoSketchFunction(editOptions20, newPage);
        ////////////////////////////////////////////////////////////////////////////
        await waitForEnter();
        // console.log("Before editIntoSketchFunction");
        const title21 = '(3) Extrude Sketch(1.03)'; // Replace with the desired title
        const editOptions21 = await performRightClickOptionByTitle(newPage, selector7, title21);
        editIntoSketchFunction(editOptions21, newPage);
        ////////////////////////////////////////////////////////////////////////////
        await waitForEnter();
        // await selectOkButton(newPage);
        await searchAndClickTransform(newPage);
        // console.log("After searchAndClickTransform");
        await waitForEnter();
        // console.log("After searchAndClickTransform");
        ////////////////////////////////////////////////////////////////////////////


        //Working on (5) Extrude 3 PLAY(2.00)
        ////////////////////////////////////////////////////////////////////////////
        const selector9 = 'div[data-id="zUc3/N14UtKVlcJg"]'; // Replace with the appropriate selector
        const title9 = '(5) Extrude 3 PLAY(2.00) did not regenerate properly: No merge scope selected.<br>1 missing selection';
        const editOptions9 = await performRightClickOptionByTitle(newPage, selector9, title9);
        console.log("RRRRRRRRRRR");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("SSSSSSSSSSSS");
        console.log(''); // This logs an empty line, effectively skipping a line
        editIntoSketchFunction(editOptions9, newPage);
        ////////////////////////////////////////////////////////////////////////////


        console.log("TTTTTTTTTTTT");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        await selectOkButton(newPage)
        console.log("UUUUUUUUUUUU");
        console.log(''); // This logs an empty line, effectively skipping a line


        //Working on (6) Sketch 2(1.04)
        ////////////////////////////////////////////////////////////////////////////
        console.log("VVVVVVVVVVV");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("WWWWWWWWWWW");
        console.log(''); // This logs an empty line, effectively skipping a line
        const selector10 = 'div[data-id="rscxt6ouKl+W1w6N"]'; // Replace with the appropriate selector
        const title10 = '(6) Sketch 2(1.04) did not regenerate properly: Select a sketch plane.<br>1 missing selection';
        console.log('Right-clicking on the specified element.');
        const editOptions10 = await performRightClickOptionByTitle(newPage, selector10, title10);
        console.log("XXXXXXXXXXX");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("YYYYYYYYYYY");
        console.log(''); // This logs an empty line, effectively skipping a line
        editIntoSketchFunction(editOptions10, newPage);
        ////////////////////////////////////////////////////////////////////////////


        console.log("ZZZZZZZZZZZ");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        await selectOkButton(newPage);
        console.log("AAAAAAAAAAA");
        console.log(''); // This logs an empty line, effectively skipping a line


        ////////////////////////////////////////////////////////////////////////////
        // WORKING ON NEW CODE
        console.log("BBBBBBBBBBB");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("CCCCCCCCCCC");
        console.log(''); // This logs an empty line, effectively skipping a line
        console.log('Right-clicking on the specified element.');
        const editOptions2 = await performRightClickOptionByTitle(newPage, selector1, title1);
        console.log("DDDDDDDDDDD");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("EEEEEEEEEEE");
        console.log(''); // This logs an empty line, effectively skipping a line
        copySketchFunction(editOptions2, newPage);
        // Select sketch to click or unclick, good code to select and unselect
        console.log("FFFFFFFFFFF");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("GGGGGGGGGGG");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        //We get an error here, because the title7 and selector7 just changed. 
        // const selector7 = 'div[data-id="rscxt6ouKl+W1w6N"]'; // Replace with the appropriate selector
        const title22 = '(6) Sketch 2(1.04)'; // Replace with the desired title
        const editOptions22 = await performRightClickOptionByTitle(newPage, selector10, title22);
        //Testing code
        console.log("HHHHHHHHHH");
        await waitForEnter();
        console.log("IIIIIIIIII");
        pasteIntoSketchFunction(editOptions22, newPage);
        ////////////////////////////////////////////////////////////////////////////
        await waitForEnter();
        const editOptions23 = await performRightClickOptionByTitle(newPage, selector10, title22);
        editIntoSketchFunction(editOptions23, newPage);
        ////////////////////////////////////////////////////////////////////////////
        await waitForEnter();
        ////////WORKING CODE
        await searchAndClickTransform(newPage);
        await waitForEnter();
        ////////////////////////////////////////////////////////////////////////////


        //Working on Extrude 1
        ////////////////////////////////////////////////////////////////////////////
        const selector11 = 'div[data-id="gdrROUTBVHLLvba1"]'; // Replace with the appropriate selector
        const title11 = 'Extrude 1 did not regenerate properly: Select face or sketch region to extrude.<br>2 missing selections';
        const editOptions11 = await performRightClickOptionByTitle(newPage, selector11, title11);
        console.log("JJJJJJJJJJJ");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("KKKKKKKKKKK");
        console.log(''); // This logs an empty line, effectively skipping a line
        editIntoSketchFunction(editOptions11, newPage);
        ////////////////////////////////////////////////////////////////////////////


        console.log("LLLLLLLLLLL");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        await selectOkButton(newPage);
        console.log("MMMMMMMMMMM");
        console.log(''); // This logs an empty line, effectively skipping a line


        //Working on Fillet 1
        ////////////////////////////////////////////////////////////////////////////
        console.log("NNNNNNNNNNNN");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("OOOOOOOOOOOO");
        console.log(''); // This logs an empty line, effectively skipping a line
        const selector12 = 'div[data-id="S2gcrVk07xQzvvV1"]'; // Replace with the appropriate selector
        const title12 = 'Fillet 1 did not regenerate properly: Select edges or faces to fillet.<br>1 missing selection';
        const editOptions12 = await performRightClickOptionByTitle(newPage, selector12, title12);
        console.log("PPPPPPPPPPPP");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("QQQQQQQQQQQQ");
        console.log(''); // This logs an empty line, effectively skipping a line
        editIntoSketchFunction(editOptions12, newPage);
        ////////////////////////////////////////////////////////////////////////////


        console.log("GGGGGGGGGGG");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        await selectOkButton(newPage);
        console.log("HHHHHHHHHHH");
        console.log(''); // This logs an empty line, effectively skipping a line


        //Working on Chamfer 1
        ////////////////////////////////////////////////////////////////////////////
        console.log("GGGGGGGGGGG");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("HHHHHHHHHHH");
        console.log(''); // This logs an empty line, effectively skipping a line
        const selector13 = 'div[data-id="098TXre2LrwgVvuP"]'; // Replace with the appropriate selector
        const title13 = 'Chamfer 1 did not regenerate properly: Select edges or faces to chamfer.<br>2 missing selections';
        const editOptions13 = await performRightClickOptionByTitle(newPage, selector13, title13);
        console.log("IIIIIIIIIII");
        console.log(''); // This logs an empty line, effectively skipping a line
        await waitForEnter();
        console.log("JJJJJJJJJJJ");
        console.log(''); // This logs an empty line, effectively skipping a line
        editIntoSketchFunction(editOptions13, newPage);


        // Good code to select items
        console.log('Select sketch to click or unclick again');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            if (thirdButton) {
                thirdButton.click();
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });
        console.log("Third button clicked and scrolled into view again.");

        console.log("SSSSSSSSSSS");
        console.log(''); // This logs an empty line, effectively skipping a line

        // Edit operation
        console.log('Waiting 10 seconds.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds

        const desiredIndex3 = 7; // Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex3);

        console.log('Waiting 10 seconds before editing.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds

        const selector3 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const title3 = 'Second Sketch'; // Replace with the desired title
        const editOptions4 = await performRightClickOptionByTitle(newPage, selector3, title3);
        console.log(editOptions4);

        // Perform the edit function
        editIntoSketchFunction(editOptions4, newPage);

        console.log('Waiting 40 seconds after edit.');
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 40 seconds
        console.log('AFTER THE CODE RUNS.');

        console.log("TTTTTTTTTTT");


        console.log("UUUUUUUUUUU");
        ////////////////////
        await waitForEnter();
        console.log('USER CLICKED ENTER')
        console.log("VVVVVVVVVVV");
        ////////////////////
        await searchAndClickTransform(newPage);



        console.log('After waiting for the transform function')
        console.log("WWWWWWWWWWW")


        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("XXXXXXXXXX")


        //MOVING TO THE THIRD SKETCH
        console.log('moving to the third sketch')
        //ALL THE CODE TOGETHER
        // const desiredIndex = 5; // Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex);
        //Right click option
        // const selector = 'div[data-id="Dg4JdGx6jlZTm4XD"]'; // Replace with the appropriate selector
        // const title = 'First Sketch'; // Replace with the desired title
        const editOptions5 = await performRightClickOptionByTitle(newPage, selector, title);
        console.log(editOptions5);
        // const desiredOption = 'Copy sketch'; //TYPE WHICH EDIT OPTION YOU WANT TO CHOSE
        copySketchFunction(editOptions5, newPage);
        console.log("YYYYYYYYYYY")


        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("ZZZZZZZZZZZ")


        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });


        console.log("QQQQQQQQQQQ")
        // RIGHT CLICK
        //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        console.log('pasteIntoSketchFunction');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        const desiredIndex9 = 8; //IMPORTANT PART THAT MAKES THE CODE RUN!
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 10 seconds
        console.log('Waiting 5 seconds.');
        await clickButtonByIndex(newPage, desiredIndex9);
        //Right click option
        const selector14 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector
        // const selector8 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const title14 = 'Third Sketch'; // Replace with the desired title
        const editOptions14 = await performRightClickOptionByTitle(newPage, selector14, title14);
        console.log(editOptions14);
        //Paste into sketch function
        //TODO: THE CORE RUNS BECAUSE WE MADE IT RUN FOR 40 SECONDS. 
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        console.log('Waited for 10 seconds.');
        console.log('BEFORE THE CODE RUNS.');
        //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        console.log('pasteIntoSketchFunction');
        pasteIntoSketchFunction(editOptions14, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("RRRRRRRRRR")



        console.log("SSSSSSSSSS")
        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });



        ////////////////////
        await waitForEnter();
        ////////////////////
        console.log("SSSSSSSSSSSSSSSSS")





        ////////////////////////////////////////////////////////////////////////////
        //SELECT SKETCH TO CLICK OR UNCLICK, THIS CODE IS REALLY IMPORTANT
        console.log('Waiting 10 seconds.');
        console.log('SELECTING ITEM 5 ON THE LIST.');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
        await newPage.evaluate(() => {
            const thirdButton = document.querySelectorAll('.os-list-item-name')[5];
            thirdButton.click();
            if (thirdButton) {
                thirdButton.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            } else {
                console.error('Third button not found.');
            }
        });
        console.log("TTTTTTTTTTTTTT")
        ////////////////////////////////////////////////////////////////////////////






        //EDIT
        //ALL THE FOLLOWING CODE NEEDS TO GO TOGETHER
        console.log('Waiting 10 seconds.');
        console.log('clickButtonByIndex');
        console.log('editIntoSketchFunction')
        console.log('editIntoSketchFunction');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        //ALL THE CODE TOGETHER
        const desiredIndex4 = 8; // IMPORTANT (NEEDS TO BE THE SAME AS THE SELECTOR) Or any other desired index
        await clickButtonByIndex(newPage, desiredIndex4);
        //EDIT
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 5
        // const selector3 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector //ORIGINAL
        // const selector4 = 'div[data-id="AJC+8X/uU1MWWXEK"]'; // Replace with the appropriate selector
        const selector4 = 'div[data-id="yyHiDTMWflCzpmJN"]'; // Replace with the appropriate selector
        // const title4 = 'Second Sketch'; // Replace with the desired title
        const title4 = 'Third Sketch'; // Replace with the desired title
        const editOptions6 = await performRightClickOptionByTitle(newPage, selector4, title4);
        console.log(editOptions6);
        //NEED TO ADD THE EDIT FUNCTION HERE, LIKE pasteIntoSketchFunction OR copySketchFunction
        console.log('editIntoSketchFunction')
        editIntoSketchFunction(editOptions6, newPage);
        await new Promise(resolve => setTimeout(resolve, 40000)); // Wait for 10 seconds
        console.log('Waited for 40 seconds.'); console.log('AFTER THE CODE RUNS.');
        console.log("QQQQQQQQQQQQQQ")








        ////////////////////
        console.log('WAITING FOR USER TO CLICK ENTER')
        await waitForEnter();
        console.log('USER CLICKED ENTER')
        ////////////////////
        await searchAndClickTransform(newPage);
        console.log('After waiting for the transform function')


        ////////////////////
        await waitForEnter();
        console.log("LLLLLLLLLLLLLLLLL")
        ////////////////////


        //////////////////// Code to click Enter
        // await newPage.keyboard.press('Enter');
        ////////////////////

        //////////////////// Code to click  selectCancelButton
        // await selectCancelButton(newPage);
        ////////////////////

        //////////////////// Code to click selectOkButton
        // await selectOkButton(newPage);
        ////////////////////


        await newPage.evaluate(() => {
            document.addEventListener('mousemove', (event) => {
                console.log(`Mouse coordinates: X = ${event.clientX}, Y = ${event.clientY}`);
            });
        });

        console.log('Move the mouse over the page to see the coordinates...');
        await new Promise(resolve => setTimeout(resolve, 3000));

        console.log('Script completed successfully.');



    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
