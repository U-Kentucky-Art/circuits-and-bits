//Introduction more "atomic" programming with functions
//We will use a function or collection of reusable commands to
//draw a geometric pattern resembling a face


function FunnyFace(x,y){
  stroke(0,255,0,255);
  fill(127,10,200,255);
  rect(x, y, 60, 60);

  rect(x+10, y+5, 10, 10);
  rect(x+40, y+5, 10, 10);

  ellipse(x+30,y+35, 30, 30);
}

function setup() {
  createCanvas(800,300);
  background(255,0,0,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var counter=0;counter<8;counter=counter+1){
    FunnyFace(15+counter*100, 20);
  }

}
