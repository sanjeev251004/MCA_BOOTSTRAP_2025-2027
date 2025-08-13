const readline = require("readline");

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Input sequence
rl.question("Enter Principal Amount: ", function (principalInput) {
    rl.question("Enter Rate of Interest: ", function (rateInput) {
        rl.question("Enter No. of Years: ", function (yearsInput) {
            // Parse inputs
            const P = parseFloat(principalInput);
            const R = parseFloat(rateInput);
            const N = parseFloat(yearsInput);

            // Input validation
            if (isNaN(P) || isNaN(R) || isNaN(N) || P < 0 || R < 0 || N < 0) {
                console.log("Please enter valid non-negative numbers for all inputs.");
            } else {
                // Calculate Simple Interest
                const SI = (P * R * N) / 100;

                // Output
                console.log(`Simple Interest = ${SI.toFixed(2)}`);
            }

            rl.close();
        });
    });
});
