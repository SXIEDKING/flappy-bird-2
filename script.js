 "use strict"



const flapSound = new Audio('sfx_woosh.mp3')
const dieSound = new Audio('sfx_die.mp3')
const hitSound = new Audio('sfx_hit.mp3')
const gameContainer =  document.querySelector('.game-container')
let bird = new Bird(100,300,3)
new Obstacle()
setInterval(function(){bird.fall()}, 20) // steps the game forward every 20 milliseconds

// let gap = 430

     function control(e){  // function so that only the spacebar can make the bird jump
        if (e.keyCode === 32)
            flapSound.play();
             bird.flap()
         }

     document.addEventListener('keyup', control) //32
    
    
         




    