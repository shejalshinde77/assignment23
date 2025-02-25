// Get the dice and roll button elements
const dice = document.getElementById('dice-1');
const rollBtn = document.getElementById('roll-btn');
const resultText = document.getElementById('result');

// Function to roll the dice
function rollDice() {
    // Generate a random number between 1 and 6
    const roll = Math.floor(Math.random() * 6) + 1;
    
    // Update the dice dots based on the roll
    switch (roll) {
        case 1:
            dice.innerHTML = '<div class="dot dot-5"></div>';
            break;
        case 2:
            dice.innerHTML = '<div class="dot dot-1"></div><div class="dot dot-6"></div>';
            break;
        case 3:
            dice.innerHTML = '<div class="dot dot-1"></div><div class="dot dot-5"></div><div class="dot dot-6"></div>';
            break;
        case 4:
            dice.innerHTML = '<div class="dot dot-1"></div><div class="dot dot-2"></div><div class="dot dot-5"></div><div class="dot dot-6"></div>';
            break;
        case 5:
            dice.innerHTML = '<div class="dot dot-1"></div><div class="dot dot-2"></div><div class="dot dot-4"></div><div class="dot dot-5"></div><div class="dot dot-6"></div>';
            break;
        case 6:
            dice.innerHTML = '<div class="dot dot-1"></div><div class="dot dot-2"></div><div class="dot dot-3"></div><div class="dot dot-4"></div><div class="dot dot-5"></div><div class="dot dot-6"></div>';
            break;
    }
    
    // Update the result text
    resultText.textContent = `You rolled a ${roll}!`;
}

// Add an event listener to the roll button
rollBtn.addEventListener('click', rollDice);
