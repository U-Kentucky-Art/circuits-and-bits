
var mr_dragon, lazy_dragon; //these are global variables

function preload() {
  mr_dragon = loadImage("./dragon.png");
  lazy_dragon = loadImage("./dragon2.png");
}

function setup() {
  canvas_context=createCanvas(700,200);
  background(255,200,0,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var counter=0;counter<7;counter=counter+1){
    if(counter%2==0){
      image(mr_dragon,counter*100,0,100,100);
    }
    else{
      image(lazy_dragon,counter*100,0,100,100);
    }

  }

  save(canvas_context, "dragonImage.jpg")
  //https://p5js.org/reference/#/p5/save

}
