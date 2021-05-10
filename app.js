let win = false
let player = []
let simon = []
let rounds = 0;
let flashes = 0;
let intervals;
let onStreak = false
let simonTurn = false;


const allCircle = document.querySelectorAll('.circle')
const startBtn = document.querySelector('#start')
const green = document.querySelector('#top-left')
const red = document.querySelector('#top-right')
const yellow = document.querySelector('#bottom-left')
const blue = document.querySelector('#bottom-right')
const reset = document.querySelector('#reset');
const roundCount = document.querySelector('#round')



//startgame function 
const startGame = () => {
    win = false;
    simon = [];
    player = [];
    rounds = 1
    roundCount.innerText = rounds
    flashes = 0
    onStreak = true
    for (let i = 0; i < 20; i++) {
        simon.push(Math.floor(Math.random() * 4) + 1)
    }
    simonTurn = true
    inteverals = setInterval(nextRound, 1000)
}


// this idea was taken from https://github.com/beaucarnes/simon-game/blob/master/js/index.js
// next round function 
const nextRound = () => {
    win = false
    if (flashes === rounds) {
        clearInterval(intervals)
        originalColor()
        simonTurn = false
    }
    // allCircle.classList.add('disable');
    if (simonTurn === true) {
        originalColor()
        setTimeout(() => {
            if (simon[flashes] === 1) {
                green.style.backgroundColor = "lightgreen";
                startGame()
            }
            if (simon[flashes] === 2) {
                red.style.backgroundColor = "red"
                startGame()
            }
            if (simon[flashes] === 3) {
                yellow.style.backgroundColor = "yellow";
                startGame()
            }
            if (simon[flashes] === 4) {
                blue.style.backgroundColor = "blue";
                startGame()
            }
            flashes++;
        }, 200);
    }

    checkSequence()
}


//reset function
const resetGame = () => {
    win = false
    player = []
    sequence = []
    simonTurn = false
    rounds = 0
}

// this idea was taken form https://github.com/sahaya-cyril/Simon-Game/blob/main/game.js"
const checkSequence = () => {
    if (simon[player.length - 1] !== player[player.length - 1]) {
        onStreak = false
    }
    else if (simon.length === player.length) {
        setTimeout(() => {
            nextRound();
        }, 1000);
    } else if (player.length === 20 && onStreak == true) {
        win = true
        alert('You won!')
        alert('Hit the reset button or refresh the page')
        lightColors();

    } else if (onStreak === false) {
        const h2 = document.createElement('h2');
        h2.innerText = 'Wrong! Game over, Reset the game'
        setTimeout(() => {
            originalColor()
            roundCount.innerText = rounds
        }, 800)

    } else if (rounds === player.length && onStreak && !win) {
        rounds++;
        player = [];
        simonTurn = true;
        flash = 0;
        roundCount.innerText = rounds;
        intervalId = setInterval(nextRound, 800);
    }
}

const originalColor = () => {
    green.style.backgroundColor = "darkgreen";
    red.style.backgroundColor = "darkred";
    yellow.style.backgroundColor = "goldenrod";
    blue.style.backgroundColor = "darkblue";
}




//event listeners
green.addEventListener('click', (event) => {
    green.style.backgroundColor = "lightgreen";
    player.push(1)
    console.log(player)

})

red.addEventListener('click', (event) => {
    red.style.backgroundColor = "red";
    player.push(2)
    console.log(player)
})

yellow.addEventListener('click', (event) => {
    yellow.style.backgroundColor = "yellow";
    player.push(3)
    console.log(player)
})

blue.addEventListener('click', (event) => {
    blue.style.backgroundColor = "blue";
    player.push(4)
    console.log(player)
})


startBtn.addEventListener('click', startGame)

reset.addEventListener('click', resetGame)

