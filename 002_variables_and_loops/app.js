//Introducing Colors and Line weights
//color channels are going to be represented by numbers from 0 to 255 = 8bit values
function setup() {
  createCanvas(600, 600);
  background(255,0,0,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  var counter = 0; //SET counter to zero
  console.log("Initial value of the counter variable is " + counter);
  //concatinating a value onto the string of characters

  for(counter=0;counter<3;counter=counter+1){
    strokeWeight(10);
    stroke(0,255,0,255);
    fill(127,10,200,255);
    rect(counter*50, 50, 60, 60);
    console.log(counter*100); //debug the variables
  }
}
