let win = false
let player = []
let sequence = []
let rounds = 0


const startBtn = document.querySelector('#start')
const green = document.querySelector('#top-left')
const red = document.querySelector('#top-right')
const yellow = document.querySelector('#bottom-left')
const blue = document.querySelector('#bottom-right')
const reset = document.querySelector('#reset');
const round = document.querySelector('#round')




const startGame = () => {
    alert(`You're about to start the game! `);
    win = false;
    randomOrder = [];
    player = [];
    round.innerText = '1';
    for (let i = 0; i < 20; i++) {
        sequence.push(Math.floor(Math.random() * 4) + 1)
    }
}

const nextRound = () => {
    rounds++
}

const resetGame = () => {
    win = false
    player = []
    randomOrder = []
    computer = false
    round.innerText = '0'
}

startBtn.addEventListener('click', startGame)
reset.addEventListener('click', resetGame)




