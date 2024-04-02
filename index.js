let hasBlackjack = false; // See if user got Blackjack
let isAlive = false; // See if user is still in the game
let message = "";
let globalCards = new Array();

let player = {
  name: "Tim",
  chips: 100,
};

// Store the message element paragraph in a variable called messageEl
let messageEl = document.querySelector("#message-el");
// Store the sum element in a variable called sumEl
let sumEl = document.querySelector("#sum-el");
// Store the cards element in a variable called cardsEl
let cardsEl = document.querySelector("#cards-el");
// Store the player element in a variable called playerEl
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

// This function will start the game
function startGame() {
  if (isAlive) {
    return;
  }
  isAlive = true;
  // Get the first two cards
  for (let i = 0; i < 2; i++) {
    globalCards.push(getRandomInt(1, 11));
  }

  // Display the firstCard and secondCard
  renderGame(globalCards);
}

// This function will render the current game result by given current cards
function renderGame(cards) {
  console.log(cards);
  let currentCards = "Cards: ";
  let currentSum = 0;
  // Display the cards that user got so far
  for (let i = 0; i < cards.length; i++) {
    // Add up the sum
    currentSum += cards[i];
    if (i == 0) {
      currentCards += `${cards[i]}`;
    } else {
      currentCards += ` , ${cards[i]}`;
    }
  }
  // Show cards to user
  cardsEl.textContent = currentCards;

  // Show sum to user
  sumEl.textContent = "Sum: " + currentSum;

  // Show the message to user
  if (currentSum < 21) {
    message = "Do you want to draw a new card?";
  } else if (currentSum === 21) {
    hasBlackjack = true;
    message = "Let's go! You got Balckjack!";
  } else {
    isAlive = false;
    message = "You are out of the game";
    // Clear the state
    globalCards = new Array();
  }

  messageEl.textContent = message;
  console.log(cardsEl.textContent);
}

// This function will give user a new card
function newCard() {
  if (isAlive === false || hasBlackjack === true) {
    return;
  }
  let newCard = getRandomInt(1, 11);
  globalCards.push(newCard);
  renderGame(globalCards);
}

// This function will get random number between min and max
function getRandomInt(min, max) {
  return Math.floor(min + (max + 1 - min) * Math.random());
}
