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
//this function works after the start button is clicked and checks what random number is been added to simons array.
const simonSequence = () => {
    startBtn.setAttribute('disabled', 'disabled');
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
    }, 800)

}
//generates a random number each time the function is called and add it to simons array
const randomNumber = () => {
    let random = Math.floor(Math.random() * 4)
    simon.push(random)
}

// this function give each color a lighter one after they're called or clicked
const activateColor = (id, color) => {
    document.getElementById(id).classList.add(color + '-active')
    playSound(id)
    setTimeout(() => {
        document.getElementById(id).classList.remove(color + '-active')
    }, 500);
}

// this function checks the player sequence after every click
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
// this function check if simon and players array are the same
const checkSequence = () => {
    for (let i = 0; i < player.length; i++) {
        if (player[i] !== simon[i]) {
            return false
        }
    }
    return true
}


//reset game function 
const resetGame = () => {
    player = []
    simon = []
    rounds = 0
    roundCount.innerHTML = rounds
    startBtn.removeAttribute('disabled', 'disabled')
}

//click the wrong color 
const wrongColor = () => {
    let wrong = setInterval(() => {
        alert('OPSS!!! You clicked the wrong color! Start again')
        resetGame()
        clearInterval(wrong)
    }, 150)
}

// sound function 

const playSound = (id) => {
    let sound = new Audio(soundEfects[id])
    sound.play()
}


////////event listeners////
window.addEventListener('DOMContentLoaded', () => {
    //modal
    const openBtn = document.querySelector('#openModal');
    const modal = document.querySelector('#modal');
    const closeBtn = document.querySelector('#close');
    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // start and reset
    startBtn.addEventListener('click', simonSequence)
    reset.addEventListener('click', resetGame)

    /////green
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
    ///red
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
    ////yellow
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
    /////blue
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

});

const openModal = () => {
    modal.style.display = 'block'
}

const closeModal = () => {
    modal.style.display = 'none'
}
