"use strict";

// ELEMENTS
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// SCORE
let currentScore = 0;

// ROLL DICE FUNC
btnRoll.addEventListener("click", function () {
  // GENERATE RANDOM ROLL
  const dice = Math.trunc(Math.random() * 6 + 1);
  // DISPLAY DICE
  diceEl.classList.remove("hidden");
  diceEl.src = `img/dice-${dice}.png`;
  // CHECK FOR ROLLED 1
  if (dice !== 1) {
    // ADD DICE TO SCORE
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // SWITCH PLAYER
  }
});
