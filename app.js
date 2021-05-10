let win = false
let player = []
let sequence = []
let rounds = 0
let colors = ["red", "blue", "green", "yellow"]


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

}

const nextRound = () => {
    rounds++
    randomOrder = Math.floor(Math.random() * 4)
    sequence.push(colors[randomOrder])
    player = []
    circle.classList.add('disable');
    originalColor()
}

const resetGame = () => {
    win = false
    player = []
    randomOrder = []
    computer = false
    round.innerText = '-'
}

// this idea was taken form https://github.com/sahaya-cyril/Simon-Game/blob/main/game.js"
const checkWinner = (currentLevel) => {
    if (sequence[currentLevel] === player[currentLevel]) {
        if (sequence.length === player.length) {
            setTimeout(function () {
                nextRound();
            }, 1000);
        } else if (player.length === 20) {
            win = true
            alert('You won!')
            alert('Hit the reset button or refresh the page')
            resetGame()
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

const


    startBtn.addEventListener('click', startGame)
reset.addEventListener('click', resetGame)


green.addEventListener('click', (event) => {
    green.style.backgroundColor = "lightgreen";
    if (win === false) {
        setTimeout(() => {
            originalColor();
        }, 300);
    }
})

red.addEventListener('click', (event) => {
    red.style.backgroundColor = "red";
    if (win === false) {
        setTimeout(() => {
            originalColor();
        }, 300);
    }
})

yellow.addEventListener('click', (event) => {
    yellow.style.backgroundColor = "yellow";
    if (win === false) {
        setTimeout(() => {
            originalColor();
        }, 300);
    }
})

blue.addEventListener('click', (event) => {
    blue.style.backgroundColor = "blue";
    if (win === false) {
        setTimeout(() => {
            originalColor();
        }, 300);
    }
})
