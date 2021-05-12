// allbuttons in the game
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
let totalRounds = 20
let soundEfects = [
    "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",//green
    "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",//red
    "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",//yellow
    "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"//blue
]



//this was inspired by : https://codepen.io/zentech/pen/XaYygR?editors=0010
const simonSequence = () => {
    rounds++
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
        } else {
            return
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
    playSound(id)
    setTimeout(() => {
        document.getElementById(id).classList.remove(color + '-active')
    }, 500);
}

const playerSequence = () => {
    if (checkSequence() === false) {
        wrongColor()
        simonSequence()

    } else if (player.length === simon.length && player.length < totalRounds) {
        simonSequence()
        player = []

    } if (player.length === totalRounds) {
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
    let attempts = 0
    let wrong = setInterval(() => {
        attempts++
        if (attempts === 3) {
            clearInterval(wrong)
            alert('You wrong color! start again')
            resetGame()
        }
    }, 200)
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
    activateColor(id, color)
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
    playerSequence()
})

/////////// modal ///////////////////
window.addEventListener('DOMContentLoaded', () => {
    // Grabbing About the Game button
    const openBtn = document.querySelector('#openModal');

    // Grabbing modal element
    const modal = document.querySelector('#modal');

    // Grabbing close button
    const closeBtn = document.querySelector('#close');

    openBtn.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);

    reset.addEventListener('click', resetGame)


    startBtn.addEventListener('click', simonSequence)

});



const openModal = () => {
    modal.style.display = 'block'
}

const closeModal = () => {
    modal.style.display = 'none'
}


// sound function 

const playSound = (id) => {
    let sound = new Audio(soundEfects[id])
    sound.play()
}