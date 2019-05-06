/*----- constants -----*/
// establish images that are gonna be used 
const slotImage = ["atom.png","moon.png","falcon.png","fullMoon.png","rocket.png","satellite.png","sputnick.png","star.png","astronautHelmet.png"] 

/*----- app's state (variables) -----*/



/*----- cached element references -----*/



/*----- event listeners -----*/
document.getElementById('spinButton').addEventListener("click", function (){
    flipImage ();
});


/*----- functions -----*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function flipImage() {
        var img = slotImage.length
        var rand = Math.floor((Math.random() * img) + 0);
        var ranimg = slotImage[rand];
        document.appendChild("<img src='"+ranimg+"'></img>");
      }
  