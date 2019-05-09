/*----- constants -----*/
// establish images that are gonna be used 
const slotImage = ["images/daniel.jpeg","images/falcon.png","images/rocket.png","images/satellite.png","images/moon.png","images/fullMoon.png","images/sputnick.png","images/star.png","images/star.png","images/star.png","images/star.png","images/star.png","images/astronautHelmet.png","images/atom.png"] 

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




function randImage() {
  return Math.floor(Math.random() * 10);
}

function spinBtn () {
  countdown(8)
  getWinner();
 } 
  
  function cycleImage() {
    checkSlot.slot1.imgUrl =slotImage[randImage()];
    checkSlot.slot2.imgUrl =slotImage[randImage()];
    checkSlot.slot3.imgUrl =slotImage[randImage()];
    checkSlot.slot4.imgUrl =slotImage[randImage()];
  }

  function countdown(secs){
    if(secs !== -1){
      setTimeout(() => {
        cycleImage()
        render()
        countdown(--secs)
        auto()
       
        }, 100)
      }
    }
    
    function render () {
      //render slot images
      slotOne.style.backgroundImage = `url(${checkSlot.slot1.imgUrl})`
      slotTwo.style.backgroundImage = `url(${checkSlot.slot2.imgUrl})`
      slotThree.style.backgroundImage = `url(${checkSlot.slot3.imgUrl})`
      slotFour.style.backgroundImage = `url(${checkSlot.slot4.imgUrl})`
      
      }
     
    
  function init () {
    result = {
      slot1: slotOne,
      slot2: slotTwo,
      slot3: slotThree,
      slot4: slotFour,
      
    }
  };
  
  
  function allMatch () {
    if (slotOne.style.backgroundImage === slotFour.style.backgroundImage && slotTwo.style.backgroundImage === slotThree.style.backgroundImage && slotOne.style.backgroundImage === slotTwo.style.backgroundColor || slotThree.style.backgroundImage === slotFour.style.backgroundImage) { 
       document.getElementById('status').innerText = "All Matching";
       slotOne.parentElement.style.border = '6px solid yellow';
} else if (slotOne.style.backgroundImage === slotTwo.style.backgroundImage || slotThree.style.backgroundImage === slotFour.style.backgroundImage || slotTwo.style.backgroundImage === slotThree.style.backgroundImage) {
  return  document.getElementById('status').innerText = "Got a Pair";
}else if (slotOne.style.backgroundImage !== slotTwo.style.backgroundImage && slotThree.style.backgroundImage !== slotFour.style.backgroundImag ) {
   document.getElementById('status').innerText = "Got Nothing";
  document.getElementById('status').style.border=`{ '5px double red' ? '5px dashed black'}`
  

  
}
};


    function getWinner () {
      setTimeout(function() {
        allMatch()
      }, 1000);
    }

 var interval = null;

function auto(running){
    if(running){
      
      interval = setInterval(() => spinBtn(), 2000 ) * 50
    }
    
       
       else if (!running){
        clearInterval(interval)
      return "process complete" 
     } else {
      return "invalid command"
   }
}


