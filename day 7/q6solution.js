/**
 * Q6: Student Marks Total and Average
 * Input 3 marks, calculate total and average.
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let marks = [];
let count = 0;

// Function to ask for each mark
function askMark() {
    rl.question(`Enter Mark ${count + 1}: `, (input) => {
        const mark = parseFloat(input);

        if (isNaN(mark) || mark < 0) {
            console.log("Please enter a valid non-negative number.");
            askMark(); // retry current input
        } else {
            marks.push(mark);
            count++;

            if (count < 3) {
                askMark();
            } else {
                const total = marks[0] + marks[1] + marks[2];
                const average = total / 3.0;

                console.log(`Total Marks   = ${total}`);
                console.log(`Average Marks = ${average.toFixed(1)}`);
                rl.close();
            }
        }
    });
}

// Start input
askMark();
