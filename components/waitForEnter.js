async function waitForEnter() {
    console.log('CODE TO HAVE CODE WAIT UNTIL USER INPUT');

    const readline = require('readline');
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    // console.log('Please press the Enter key to continue...');

    const enterPromise = new Promise(resolve => rl.once('line', () => {
        rl.close(); // Ensure the readline interface is closed
        resolve();
    }));

    await enterPromise;

    console.log('User pressed Enter to continue.');
}

module.exports = waitForEnter;
