let hasBlackjack = false; // See if user got Blackjack
let isAlive = true; // See if user is still in the game
let message = "";

// Store the message element paragraph in a variable called messageEl
let messageEl = document.querySelector("#message-el");
// Store the sum element in a variable called sumEl
let sumEl = document.querySelector("#sum-el");
// Store the cards element in a variable called cardsEl
let cardsEl = document.querySelector("#cards-el");

// This function will start the game
function startGame() {
  let firstCard = getRandomInt(1, 11);
  let secondCard = getRandomInt(1, 11);

  // Display the firstCard and secondCard
  cardsEl.textContent = "Cards: " + firstCard + " and " + secondCard;

  // Display the sum of the firstCard and secondCard
  let sum = firstCard + secondCard;
  sumEl.textContent = "Sum: " + sum;

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

// This function will render the current game result by given current cards
function renderGame(cards) {
  let currentCards = "Cards: ";
  let currentSum = 0;
  // Display the cards that user got so far
  for (let i = 0; i < cards.length; i++) {
    // Add up the sum
    currentSum += cards[i];
    if (i == 0) {
      currentCards += `${cards[i]}`;
    } else {
      currentCards += `and ${cards[i]}`;
    }
  }
  // Show cards to user
  cardsEl.textContent = currentCards;

  // Show the message to user
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
function newCard(sum) {
  let newCard = getRandomInt(1, 11);
  sum += newCard;
  renderGame();
}

// This function will get random number between min and max
function getRandomInt(min, max) {
  return Math.floor(min + (max + 1 - min) * Math.random());
}
