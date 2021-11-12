class Bird{
    bottom = 300
    left = 300
    gravity = 3
    div
    constructor(){
        this.div = document.getElementById('bird') // creating instance of class 'Bird'
    }
    flap(){
        this.bottom = this.bottom + 50
        this.div.style.bottom = this.bottom + 'px' 
       // if ( e.Key = 'spacebar')
        
    }
    fall(){
            this.bottom = this.bottom - this.gravity
            this.div.style.left = this.left + 'px' 
            this.div.style.bottom = this.bottom + 'px'
        }  
        
    } 

    

class Obstacle {
     left = 500 // set variable obstacleLeft 500px from ground
     height = Math.random()*400 + 130 // obstacle heights are random
    // bottom = height // randomHeight is set and can then be used for the obstacle 
     div = document.createElement('div') // create div 
     timerId
    
    
    constructor() {
        this.div.classList.add('obstacle') // add class 'obstacle' to the div
        gameContainer.appendChild(this.div) // putting a div into the game container
        this.div.style.left = this.left + 'px' // position the obstacle left side of sky container
        this.div.style.bottom = '0px' // position at the bottom of container
        this.div.style.height = this.height + 'px'
        

        this.timerId = setInterval(()=>this.move(), 20) // move the obstacle every 20 milliseconds
        setTimeout(()=>new Obstacle(), 3000) // after 3 seconds spawn another obstacle 

        
    }

    move(){
        this.left -=2
        this.div.style.left = this.left + 'px'


        // removes obstacles when they pass off the screen
        if (this.left === -75) { // this is the width of the obstacle 
            clearInterval(timerId) // cancelling out the setInterval for the Obstacle so it will then disappear after
            gameContainer.removeChild(this.obstacle) // then the div for it will disappear
        }


        // has the object collided with the bird
        if (this.left < bird.left + 60 && bird.left < this.left && this.height > bird.bottom || bird.bottom < 135){ //|| 
           // Bird.bottom === 0)   
            //console.log('bird.left'+ bird.left + 'this.left' + this.left + 'this.height' + this.height + 'bird.bottom' + bird.bottom) 
           // dieSound.play();
            hitSound.play();
            alert("You Lost A Life") 
            bird.bottom =  800
            
        }
    }
}

