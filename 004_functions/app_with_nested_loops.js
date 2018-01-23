function FunnyFace(x,y){
  stroke(0,255,0,255);
  fill(127,10,200,255);
  rect(x, y, 60, 60);

  rect(x+10, y+5, 10, 10);
  rect(x+40, y+5, 10, 10);

  ellipse(x+30,y+35, 30, 30);
}

function setup() {
  createCanvas(800,800);
  background(255,0,0,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var counter_y=0;counter_y<8;counter_y++){
    
    for(var counter_x=0;counter_x<8;counter_x++){
      FunnyFace(15+counter_x*100, 20+counter_y*120);
    }
  }
  
  //save("testing")
}
