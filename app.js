let win = false
let player = []
let sequence = []
let rounds = 0;
let flashes;
let computerTurn = false;



const allCircle = document.querySelectorAll('.circle')
const startBtn = document.querySelector('#start')
const green = document.querySelector('#top-left')
const red = document.querySelector('#top-right')
const yellow = document.querySelector('#bottom-left')
const blue = document.querySelector('#bottom-right')
const reset = document.querySelector('#reset');
// const round = document.querySelector('#round')




const startGame = () => {
    alert(`You're about to start the game! `);
    win = false;
    sequence = [];
    player = [];
    round.innerText = '1';
    originalColor();
    for (let i = 0; i < 20; i++) {
        randomNumber = (Math.floor(Math.random() * 4) + 1)
        sequence.push(randomNumber)
    }
    computerTurn = true
    nextRound()
}

// this idea was taken from https://github.com/beaucarnes/simon-game/blob/master/js/index.js
const nextRound = () => {
    rounds++;
    // allCircle.classList.add('disable');
    originalColor()

    if (computerTurn === true) {
        originalColor()
        setTimeout(() => {
            if (sequence[flashes] === 1) {
                green.style.backgroundColor = "lightgreen";
            }
            if (sequence[flashes] === 2) {
                red.style.backgroundColor = "red"
            }
            if (sequence[flashes] === 3) {
                yellow.style.backgroundColor = "yellow"
            }
            if (sequence[flashes] === 4) {
                blue.style.backgroundColor = "blue"
            }
            flashes++;
        }, 200);
    }

    checkWinner()
}

const resetGame = () => {
    win = false
    player = []
    sequence = []
    computer = false
    round.innerText = '-'
}

// this idea was taken form https://github.com/sahaya-cyril/Simon-Game/blob/main/game.js"
const checkWinner = (currentLevel) => {
    if (sequence[currentLevel] === player[currentLevel]) {
        if (sequence.length === player.length) {
            setTimeout(() => {
                nextRound();
            }, 1000);
        } else if (player.length === 20) {
            win = true
            alert('You won!')
            alert('Hit the reset button or refresh the page')
            lightColors();
            resetGame();
        }
    } else {
        const h2 = document.createElement('h2');
        h2.innerText = 'Wrong! Game over, Reset the game'
        resetGame();
    }

}

const originalColor = () => {
    green.style.backgroundColor = "darkgreen";
    red.style.backgroundColor = "darkred";
    yellow.style.backgroundColor = "goldenrod";
    blue.style.backgroundColor = "darkblue";
}

const lightColors = () => {
    green.style.backgroundColor = "lightgreen";
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "yellow";
    blue.style.backgroundColor = "blue";
}


startBtn.addEventListener('click', startGame)
reset.addEventListener('click', resetGame)


green.addEventListener('click', (event) => {
    green.style.backgroundColor = "lightgreen";
    player.push(1)
    if (win === false) {
        setTimeout(() => {
            originalColor();
        }, 200);
    }
})

red.addEventListener('click', (event) => {
    red.style.backgroundColor = "red";
    player.push(2)
    if (win === false) {
        setTimeout(() => {
            originalColor();
        }, 200);
    }
})

yellow.addEventListener('click', (event) => {
    yellow.style.backgroundColor = "yellow";]
    player.push(3)
    if (win === false) {
        setTimeout(() => {
            originalColor();
        }, 200);
    }
})

blue.addEventListener('click', (event) => {
    blue.style.backgroundColor = "blue";
    player.push(4)
    if (win === false) {
        setTimeout(() => {
            originalColor();
        }, 200);
    }
})
