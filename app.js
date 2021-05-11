const startBtn = document.querySelector('#start')
const green = document.querySelector('.green')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')
const reset = document.querySelector('#reset');
const roundCount = document.querySelector('#round')

let player = [];
let simon = [];
let rounds = 0
let color;
let id;
let totalRounds = 20

const simonSequence = () => {
    rounds += 1
    roundCount.innerText = rounds
    randomNumber();
    let i = 0;
    let interval = setInterval(() => {
        id = simon[i]
        if (id === 0) {
            color = document.querySelector('.green').getAttribute('class').split(' ')[1];
        }
        else if (id === 1) {
            color = document.querySelector('.red').getAttribute('class').split(' ')[1];
        }
        else if (id === 2) {
            color = document.querySelector('.yellow').getAttribute('class').split(' ')[1];
        }
        else if (id === 3) {
            color = document.querySelector('.blue').getAttribute('class').split(' ')[1];
        }
        addColorSound(id, color);
        i++;
        if (simon.length === i) {
            clearTimeout(interval)
        }
    }, 1000)
    console.log
}

const randomNumber = () => {
    let random = Math.floor(Math.random() * 4)
    simon.push(random)
}

const addColorSound = (id, color) => {
    document.getElementById(id).classList.add(color + '-active')
    setTimeout(() => {
        document.getElementById(id).classList.remove(color + '-active')
    }, 500);
}

const playerSequence = () => {
    player = []
    if (player.length === simon.length && player.length < totalRounds) {
        roundCount.innerText = rounds;
        simonSequence()
    } else if (checkSequence() === false) {
        error()
        simonSequence();
    } else if (player.length === totalRounds) {
        alert('You win the game!')
        resetGame()
    }
}

const checkSequence = () => {
    for (let i = 0; i < player.length; i++) {
        if (player[i] !== simon[i]) {
            return false
        }
    }
    return true
}

const resetGame = () => {
    player = []
    simon = []
    rounds = 0
    roundCount.innerHTML = rounds

}

const error = () => {
    alert('you loose')
    round = 0
}


//event listeners


green.addEventListener('click', () => {
    id = green.getAttribute('id')
    color = green.getAttribute('class').split(' ')[1]
    document.getElementById(id).classList.add(color + '-active')
    setTimeout(() => {
        document.getElementById(id).classList.remove(color + '-active')
    }, 300);
    player.push(id)
    addColorSound(id, color);
    playerSequence()
})

red.addEventListener('click', () => {
    id = red.getAttribute('id')
    color = red.getAttribute('class').split(' ')[1]
    document.getElementById(id).classList.add(color + '-active')
    setTimeout(() => {
        document.getElementById(id).classList.remove(color + '-active')
    }, 300);
    player.push(id)
    addColorSound(id, color)
    playerSequence()
})

yellow.addEventListener('click', () => {
    id = yellow.getAttribute('id')
    color = yellow.getAttribute('class').split(' ')[1]
    document.getElementById(id).classList.add(color + '-active')
    setTimeout(() => {
        document.getElementById(id).classList.remove(color + '-active')
    }, 300);
    player.push(id)
    addColorSound(id, color)
    playerSequence()
})

blue.addEventListener('click', () => {
    id = blue.getAttribute('id')
    color = blue.getAttribute('class').split(' ')[1]
    document.getElementById(id).classList.add(color + '-active')
    setTimeout(() => {
        document.getElementById(id).classList.remove(color + '-active')
    }, 300);
    player.push(id)
    addColorSound(id, color)
    playerSequence()
})




startBtn.addEventListener('click', simonSequence)
reset.addEventListener('click', resetGame)