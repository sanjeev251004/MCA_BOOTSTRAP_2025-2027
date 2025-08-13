/**
 * Q5: Sphere Volume and Surface Area Calculator
 * Volume (V) = (4/3) × π × r³
 * Area   (A) = 4 × π × r²
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt for radius
rl.question("Enter Radius of Sphere: ", (input) => {
    const r = parseFloat(input);

    if (isNaN(r) || r < 0) {
        console.log("Please enter a valid non-negative number for radius.");
    } else {
        const pi = Math.PI;
        const volume = (4 / 3) * pi * Math.pow(r, 3);
        const area = 4 * pi * Math.pow(r, 2);

        console.log(`Volume of Sphere: ${volume.toFixed(6)}`);
        console.log(`Area of Sphere  : ${area.toFixed(6)}`);
    }

    rl.close();
});
