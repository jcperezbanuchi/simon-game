const startBtn = document.querySelector('#start')
const green = document.querySelector('.green')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')
const reset = document.querySelector('#reset');
const roundCount = document.querySelector('#round')
const allCircle = document.querySelector('.circle')


let player = [];
let simon = [];
let rounds = 0
let color;
let id;
let totalRounds = 5



//this was inspired by : https://codepen.io/zentech/pen/XaYygR?editors=0010
const simonSequence = () => {
    startBtn.disable = true
    rounds++
    roundCount.innerText = rounds
    randomNumber();
    let i = 0;
    let interval = setInterval(() => {
        allCircle.classList.add('disable')
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
        activateColor(id, color);
        i++;
        if (simon.length === i) {
            clearTimeout(interval)
        }
    }, 1000)

}


const randomNumber = () => {
    let random = Math.floor(Math.random() * 4)
    simon.push(random)
}


const activateColor = (id, color) => {
    document.getElementById(id).classList.add(color + '-active')
    setTimeout(() => {
        document.getElementById(id).classList.remove(color + '-active')
    }, 500);
}

const playerSequence = () => {
    if (player.length === simon.length && player.length < totalRounds) {
        simonSequence()
        player = []
    } else if (!checkSequence()) {
        wrongColor()
        resetGame()
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

const wrongColor = () => {
    alert('Wrong color! , try again')

}


//event listeners



green.addEventListener('click', () => {
    id = green.getAttribute('id')
    color = green.getAttribute('class').split(' ')[1]
    green.classList.add(color + '-active')
    setTimeout(() => {
        green.classList.remove(color + '-active')
    }, 300);

    player.push(parseInt(id))
    activateColor(id, color);
    console.log(player)

    playerSequence()

})

red.addEventListener('click', () => {
    id = red.getAttribute('id')
    color = red.getAttribute('class').split(' ')[1]
    red.classList.add(color + '-active')
    setTimeout(() => {
        red.classList.remove(color + '-active')
    }, 300);

    player.push(parseInt(id))
    activateColor(id, color)
    console.log(player)

    playerSequence()

})

yellow.addEventListener('click', () => {
    id = yellow.getAttribute('id')
    color = yellow.getAttribute('class').split(' ')[1]
    yellow.classList.add(color + '-active')
    setTimeout(() => {
        yellow.classList.remove(color + '-active')
    }, 300);

    player.push(parseInt(id))
    activateColor(id, color)
    console.log(player)

    playerSequence()


})

blue.addEventListener('click', () => {
    id = blue.getAttribute('id')
    color = blue.getAttribute('class').split(' ')[1]
    blue.classList.add(color + '-active')
    setTimeout(() => {
        blue.classList.remove(color + '-active')
    }, 300);

    player.push(parseInt(id))
    activateColor(id, color)
    console.log(player)
    playerSequence()

})


startBtn.addEventListener('click', simonSequence)
reset.addEventListener('click', resetGame)
