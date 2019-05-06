/*----- constants -----*/
// establish images that are gonna be used 
const slotImage = ["atom.png","moon.png","falcon.png","fullMoon.png","rocket.png","satellite.png","sputnick.png","star.png","astronautHelmet.png"] 

/*----- app's state (variables) -----*/



/*----- cached element references -----*/



/*----- event listeners -----*/
document.getElementById('spinBtn').addEventListener("click", function (){
    randImage ();
});


/*----- functions -----*/
function getRandomInt(min, max) {
    var randomInt =  Math.floor(Math.random() * (max - min + 1)) + min;
      if (randomInt === 1) {
        
      }

  }
  
  function randImage() {
    
        var img = slotImage.length
        var rand = getRandomInt(0, 8);
        var randImg = slotImage[rand];
      return randImg;
      }
      
      
      
      
      function imageChange () {
        
        let counter = 0;
        while(counter !== 9) {
          counter++
          
          document.getElementById('image1').style.backgroundImage = "url('/images/atom.png')";
          
        }
      }
      // for (let value of slotImage) {
      //   // console.log(value);
      // }