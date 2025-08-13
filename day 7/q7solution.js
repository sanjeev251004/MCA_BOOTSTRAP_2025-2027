/**
 * Q7: Encode a Five-Letter Word
 * Subtract 1 from ASCII of each character.
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for a 5-letter word
rl.question("Enter a Five letter word: ", (word) => {
    if (word.length !== 5 || !/^[a-zA-Z]+$/.test(word)) {
        console.log("Please enter a valid five-letter word (letters only).");
    } else {
        let encoded = "";

        for (let i = 0; i < word.length; i++) {
            const charCode = word.charCodeAt(i) - 1;
            encoded += String.fromCharCode(charCode);
        }

        console.log(`Encoded Word: ${encoded}`);
    }

    rl.close();
});
