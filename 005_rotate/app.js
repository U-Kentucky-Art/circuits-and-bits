//And now for some rotation
//check out http://www.genekogan.com/code/p5js-transformations/
//for great examples


function FunnyFace() {
  stroke(0,255,0,255);
  fill(127,10,200,255);
  rect(0, 0, 60, 60);

  rect(10, 5, 10, 10);
  rect(40, 5, 10, 10);

  ellipse(30,35, 30, 30);
}

function setup() {
  createCanvas(700,300);
  background(255,0,0,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)
}

function draw() {
  for(var counter=0;counter<6;counter=counter+1){
    push();
    translate(50+counter*100,0);
    rotate(radians(45));
      FunnyFace();
    translate();
    pop();
  }

}
