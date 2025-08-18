function rollDice() {
  // Generate random numbers for both dice (1-6)
  let dice1Value = Math.floor(Math.random() * 6) + 1;
  let dice2Value = Math.floor(Math.random() * 6) + 1;

  // Change the dice images
  document.getElementById("dice1").src = "dice" + dice1Value + ".jpg";
  document.getElementById("dice2").src = "dice" + dice2Value + ".jpg";
  // Decide the winner
  let resultText = "";
  if (dice1Value > dice2Value) {
    resultText = "🚩 Player 1 Wins! 🚩";
  } else if (dice2Value > dice1Value) {
    resultText = " 🚩Player 2 Wins! 🚩";
  } else {
    resultText = "It's a Draw!";
  }

  // Show result
  document.getElementById("result").textContent = resultText;
}