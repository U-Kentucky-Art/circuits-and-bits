var TRIGGER_1_PRESSED = false;
var TRIGGER_2_PRESSED = false;
var song;

function setup() {
  song = loadSound('https://cdn.glitch.com/8ee07f10-fa29-401c-be18-8a6fb393c278%2Fkid_1.wav?1520534917916');
  createCanvas(720, 200);
  background(255,0,0);
}

function mousePressed() {
  if (song.isPlaying() == true) {
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}


function draw(){
  background(0);

  fill(0,255,0);
  rect(50, 100, 100, 50);
  rect(250, 100, 100, 50);

  fill(255,255,255);
  if(TRIGGER_1_PRESSED == true){
    text('PRESSED ONE', 10, 50);
  }

  if(TRIGGER_2_PRESSED == true){
    text('PRESSED TWO', 250, 50);
  }

}

function mouseClicked() {
  if(mouseX>50&&mouseX<150&&mouseY>100&&mouseY<150){
    song.play();
    console.log("Play");
  }

  if(mouseX>250&&mouseX<350&&mouseY>100&&mouseY<150){
     song.stop();
    console.log("Stop");
  }
}
