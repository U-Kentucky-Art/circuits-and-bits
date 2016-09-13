
var mr_dragon; //this is global variable

function preload() {
  mr_dragon = loadImage("./dragon.png");
}

function setup() {
  createCanvas(700,300);
  background(255,200,0);
}

function draw(){
  //keep on keeping on = infinite loop
  ellipse(mouseX, mouseY, 30, 30);
}

function mouseClicked() {
  image(mr_dragon,mouseX,mouseY,100,100);
}
  
