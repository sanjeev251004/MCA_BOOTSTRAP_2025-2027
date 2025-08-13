/**
 * Q4: Fahrenheit to Celsius Converter
 * Formula: C = (5 / 9) × (F - 32)
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get Fahrenheit input from user
rl.question("Enter Temperature in Fahrenheit: ", (fInput) => {
    const F = parseFloat(fInput);
    const C = (5 / 9.0) * (F - 32);

    console.log(`${F.toFixed(6)} deg F is ${C.toFixed(6)} deg C`);
    rl.close();
});




