// use getRandomCard() to set the value of firstcard and secondcard

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""


console.log(cards)

let player = {
     name: "Mashaa",
    chips:  200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips




// make this function to return the random number from 1 to 13
function getRandomCard(){

    let randomNumber =  Math.floor ( Math.random()*13 ) +1 // 0 - 13
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    }else {
        return randomNumber
    }
}


// store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
console.log(messageEl)
// store sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
console.log(sumEl)
// store the card paragraph in a variable called cardEl
let cardEl = document.getElementById("cards-el")

// Create the function renderGame to update the game interface
function renderGame() {
    sumEl.textContent = "sum: " + sum
    
// creat a for loop that renders out all the cards instead of just two
    cardEl.textContent = "cards: " 
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }


    // Game logic to determine the message
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wooho! You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }

    // Display the message in the messageEl
    messageEl.textContent = message
}

// Create a function called startGame that calls renderGame
function startGame() {
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard + secondcard]
    sum = firstcard + secondcard

    renderGame()  // Call renderGame from inside startGame
}

// The function to draw a new card
function newcard() {
    // only a player to get a new card if she is Alive and does Not have blackjack
    if (isAlive === true && hasBlackjack === false){
        console.log("Drawing a new card from the deck!")
    // Create a card variable and hardcode its value to a number
    let card = getRandomCard()
    // Add the new card to the sum variable
    sum += card
    //push the cards to the cards array
    cards.push(card)
    console.log(cards)

    // Call renderGame after drawing a new card
    renderGame()
    }
}
