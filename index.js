let hasBlackjack = false; // See if user got Blackjack
let isAlive = true; // See if user is still in the game
let message = "";

// Store the message element paragraph in a variable called messageEl
let messageEl = document.querySelector("#message-el");
// Store the sum element in a variable called sumEl
let sumEl = document.querySelector("#sum-el");
// Store the cards element in a variable called cardsEl
let cardsEl = document.querySelector("#cards-el");

// This function will do the game logic
function play() {
  let firstCard = getRandomInt(1, 11);
  let secondCard = getRandomInt(1, 11);

  // display the firstCard and secondCard
  cardsEl.textContent = "Cards: " + firstCard + " and " + secondCard;

  // display the sum of the firstCard and secondCard
  let sum = firstCard + secondCard;
  sumEl.textContent = "Sum: " + sum;

  // Check if user got A and (10, J, Q, K)
  // if (
  //   (firstCard === 1 && secondCard === 10) ||
  //   (firstCard === 10 && secondCard === 1)
  // ) {
  //   hasBlackjack = true;
  //   message = "Let's go! You got Balckjack!";
  // }

  let currentSum = firstCard + secondCard;

  if (currentSum < 21) {
    message = "Do you want to draw a new card?";
  } else if (currentSum === 21) {
    hasBlackjack = true;
    message = "Let's go! You got Balckjack!";
  } else {
    isAlive = false;
    message = "You are out of the game";
  }

  messageEl.textContent = message;
}

// This function will give user a new card
function newCard() {
  alert("Drawing a new card from the deck");
}

// This function will get random number between min and max
function getRandomInt(min, max) {
  return Math.floor(min + (max + 1 - min) * Math.random());
}
