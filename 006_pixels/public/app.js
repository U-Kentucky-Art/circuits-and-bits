
var mr_dragon; //this is global variable

function preload() {
  mr_dragon = loadImage("./dragon.png");
}

function setup() {
  createCanvas(700,300);
  background(255,200,0,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var counter=0;counter<6;counter=counter+1){
    push();
    translate(50+counter*100,0);
    rotate(radians(45));
      image(mr_dragon,0,0,100,100);
    translate();
    pop();
  }

}
