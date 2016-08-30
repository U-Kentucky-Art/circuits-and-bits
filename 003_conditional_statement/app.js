//Conditional Statements
//check out a little bit of math behind modulus operator
//http://stackoverflow.com/questions/17524673/understanding-the-modulus-operator
function setup() {
  createCanvas(800,300);
  background(255,0,0,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var counter=0;counter<8;counter=counter+1){
    strokeWeight(10);
    stroke(0,255,0,255);

    if((counter%2)==1){           //play with modulo operator
      fill(127,10,200,255);
    }
    else{
      fill(127,127,200,255);
    }

    rect(counter*100, 50, 60, 60);
    console.log(counter*100); //debug the variables
  }
}
