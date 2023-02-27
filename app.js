// body for changing background when user wins
const body = document.querySelector("body");
// number hidden (?) number
let number = document.querySelector(".number");
//generating random number between 1 to 20
let randNumber = Math.floor(Math.random() * 20) + 1;
// targeting the Guess button
const start = document.querySelector(".start");
// play again button
const again = document.querySelector(".again");

// gameInformation for user
let gameInformation = document.querySelector(".game-information");

// user current score
let score = document.querySelector(".score");

//user highscore
let highScore = document.querySelector(".high-score");

//game defaluts
let scoreTracker = 20;
let highScoreTracker = 0;

let userNumber = document.querySelector(".user-number");
// listenting to the button click event
start.addEventListener("click", function () {
  // number guessed by user
  console.log(userNumber.value);
  if (userNumber.value == randNumber) {
    body.style.backgroundColor = "#BFDB38";

    number.innerHTML = randNumber;

    gameInformation.innerHTML = "Your guessed the number 😊";

    if (scoreTracker > highScoreTracker) {
      highScore.innerHTML = `🏆 Your highScore is ${scoreTracker}`;
    }
    gameInformation.style.color = `#000`;

    // still need to reset
  } else {
    let r = Math.floor(Math.random() * 258);
    let g = Math.floor(Math.random() * 258);
    let b = Math.floor(Math.random() * 258);
    if (scoreTracker > 1) {
      gameInformation.style.color = `rgb(${r},${g},${b})`;
      if (Number(userNumber.value) > randNumber) {
        gameInformation.innerHTML = "Enter lower number";
      } else {
        gameInformation.innerHTML = "Enter higher number";
      }
      scoreTracker--;
      score.innerHTML = `💯 current score ${scoreTracker}`;
    } else {
      gameInformation.innerHTML = "You Lose";
    }
  }
});

again.addEventListener("click", function () {
  scoreTracker = 20;
  number.innerHTML = "?";
  body.style.backgroundColor = "#00425a";
  score.innerHTML = `💯 current score ${scoreTracker}`;
  gameInformation.innerHTML = "🚀 Start gueesing";
  randNumber = Math.floor(Math.random() * 20) + 1;
  userNumber.value = "";
});
