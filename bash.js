// console.log("Testing!");

// // Output a prompt
// process.stdout.write('prompt > ');

// // The stdin 'data' event fires after a user types in a line
// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim(); // remove the newline

//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\npromt > ');
// })



// Output a prompt
console.log('System Booting up...');
console.log('System Online...');
console.log('Welcome User...');

// process.stdout.write acts like a span, it doesn't indent...
// process.stdout.write('System Online. Booting up')
process.stdout.write('System Calibrating... Please enter phrase: > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newline

    process.stdout.write('System Calibrated... You typed: ' + cmd);
    process.stdout.write('\nCalibratd System... prompt > ');
})