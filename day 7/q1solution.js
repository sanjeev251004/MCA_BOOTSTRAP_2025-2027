const readline = require("readline");

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for radius input
rl.question("Enter Radius of Circle: ", function (input) {
    // Convert input to number
    const r = parseFloat(input);

    // Validate input
    if (isNaN(r) || r < 0) {
        console.log("Please enter a valid non-negative number for radius.");
    } else {
        // Calculate area using formula A = (22/7) * r * r
        const area = (22.0 / 7) * r * r;

        // Output with 4 decimal places
        console.log(`Area of Circle with Radius ${r.toFixed(4)} is ${area.toFixed(4)}`);
    }

    // Close the input interface
    rl.close();
});
