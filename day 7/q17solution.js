/** Q17
 * This program checks the temperature value (temp) and determines 
 * the physical state of water:
 *   If temp < 0 → "ICE"
 *   If temp is between 0 and 100 (inclusive) → "WATER"
 *   If temp > 100 → "STEAM"
 * 
 * Flow Summary:
 * Get user input for temperature
 * Use if-else to decide the state of water
 * Display the result to the user
 * 
 * Sample I/O:
 * Input:
 * Enter the water temperature: 120
 * Output:
 * Water status is STEAM for the Temperature 120.00
 */

const prompt = require("prompt-sync")();

let temp = parseFloat(prompt("Enter the water temperature: "));
let status;

if (temp < 0) {
    status = "ICE";
} else if (temp <= 100) {
    status = "WATER";
} else {
    status = "STEAM";
}

console.log(`Water status is ${status} for the Temperature ${temp.toFixed(2)}`);
