// body for changing background when user wins
const body = document.querySelector("body");
// number hidden (?) number
let number = document.querySelector(".number");
//generating random number between 1 to 20
const randNumber = Math.floor(Math.random() * 20) + 1;
// targeting the Guess button
const btn = document.querySelector(".btn");

// gameInformation for user
let gameInformation = document.querySelector(".game-information");

// user current score
let score = document.querySelector(".score");

//user highscore
let highScore = document.querySelector(".high-score");

//game defaluts
let scoreTracker = 20;
let highScoreTracker = 0;

// listenting to the button click event
btn.addEventListener("click", function () {
  // number guessed by user
  let userNumber = document.querySelector(".user-number");
  console.log(userNumber.value);
  if (userNumber.value == randNumber) {
    body.style.backgroundColor = "#BFDB38";

    number.innerHTML = randNumber;

    gameInformation.innerHTML = "Your guessed the number 😊";

    highScore.innerHTML = `🏆 Your highScore is ${scoreTracker}`;

    // still need to reset
  } else {
    if (Number(userNumber.value) > randNumber) {
      gameInformation.innerHTML = "Enter lower number";
    } else {
      gameInformation.innerHTML = "Enter higher number";
    }
    scoreTracker--;
    score.innerHTML = `💯 current score ${scoreTracker}`;
  }
});
