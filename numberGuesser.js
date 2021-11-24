let prompt = require("prompt-sync")();

let randNum = Math.floor(Math.random() * 100);

const numberGuesser = function(num) {
  let attempts = 1;
  let guessed = [];
  let correct = false;

  while (!correct) {
    let answer = prompt("Guess a number: ");
    if (isNaN(answer)) {
      console.log("Not a valid number, try again.");
    } else if (guessed.includes(answer)) {
      console.log("Already guessed!");
    } else if (answer > num) {
      attempts += 1;
      guessed.push(answer);
      console.log("Too high!");
    } else if (answer < num) {
      attempts += 1;
      guessed.push(answer);
      console.log("Too low!");
    } else if (answer === num) {
      console.log("Correct! It took you " + attempts + " attempts!");
      correct = true;
    }
  }
};

numberGuesser(randNum);