//Introducing Colors and Line weights
//color channels are going to be represented by numbers from 0 to 255 = 8bit values
function setup() {
  createCanvas(600, 600);
  background(255,0,0,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  strokeWeight(10);
  stroke(0,255,0,255);
  fill(127,10,200,255);
  rect(50, 50, 100, 100);

  strokeWeight(5);
  stroke(255,255,0,255);
  fill(10,100,200,255);
  rect(50, 170, 100, 100);
}
