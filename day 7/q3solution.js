// Q3: Compound Interest Calculator
// Formula: F = P × (1 + i)^n

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Get user input
rl.question("Enter Principal Value: ", (p) => {
    rl.question("Enter Rate of Interest: ", (r) => {
        rl.question("Enter No. of Years: ", (n) => {
            const P = parseFloat(p);
            const R = parseFloat(r);
            const N = parseFloat(n);

            // Calculate compound amount
            const i = R / 100;
            const F = P * Math.pow((1 + i), N);

            // Output result
            console.log(`Compound Interest ${F.toFixed(2)}`);

            rl.close();
        });
    });
});
