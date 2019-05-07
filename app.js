/*----- constants -----*/
// establish images that are gonna be used 
const slotImage = ["images/atom.png","images/moon.png","images/falcon.png","images/fullMoon.png","images/rocket.png","images/satellite.png","images/sputnick.png","images/star.png","images/astronautHelmet.png"] 

const checkSlot = {
  slot1: {
    imgUrl: slotImage[randImage()]

  },
  slot2: {
    imgUrl: slotImage[randImage()]
  },
  slot3: {
    imgUrl: slotImage[randImage()]
  },
  slot4: {
    imgUrl: slotImage[randImage()]
  }

};
/*----- app's state (variables) -----*/

let scores, result, winner;

/*----- cached element references -----*/
const slotOne = document.querySelector('#slots #s1');
const slotTwo = document.querySelector('#slots #s2');
const slotThree = document.querySelector('#slots #s3');
const slotFour = document.querySelector('#slots #s4');



/*----- event listeners -----*/
document.getElementById('spinBtn').addEventListener("click", spinBtn );
    


/*----- functions -----*/
init ();

function init () {
  result = {
    slot1: '',
    slot2: '',
    slot3: '',
    slot4: '',
  }
};

  
  function randImage() {
    return Math.floor(Math.random() * 9);
      }
      
  function spinBtn () {
    
    var rotations = 0;
    do {
      rotations += 1;
      spinBtn ();

    }
    while (rotations < 9);
    
  } 
  function render () {
    //render slot images
    slotOne.style.backgroundImage = `url(${checkSlot.slot1.imgUrl})`
    slotTwo.style.backgroundImage = `url(${checkSlot.slot2.imgUrl})`
    slotThree.style.backgroundImage = `url(${checkSlot.slot3.imgUrl})`
    slotFour.style.backgroundImage = `url(${checkSlot.slot4.imgUrl})`

  } 