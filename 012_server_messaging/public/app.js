var TRIGGER_1_PRESSED = false;
var TRIGGER_2_PRESSED = false;
    
function setup(){
  createCanvas(400, 200);
  background(0);
  console.log("Ready to listen to Input -->");
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
    text('REMOTE TRIGGER PRESSED', 250, 50);
  }

}

function mouseClicked() {
  if(mouseX>50&&mouseX<150&&mouseY>100&&mouseY<150){
    httpGet('/trigger_1_endpoint', function(response){
      console.log(response);
      var _response = JSON.parse(response)  // clean up the text that came in 
      if(_response.status === "success"){
        //TRIGGER_1_PRESSED = true;
        TRIGGER_1_PRESSED = !TRIGGER_1_PRESSED; // toggle state
      }
      
    });
  }

  if(mouseX>250&&mouseX<350&&mouseY>100&&mouseY<150){
    
    var remote_command = {url:"https://walkie-talkie-1.glitch.me/webhook", message:"howdy"}

    httpPost('/remote_trigger','json', remote_command, function(response){
      console.log(response);
      if(response.status === "success"){
        // TRIGGER_2_PRESSED = true;
        TRIGGER_2_PRESSED = !TRIGGER_2_PRESSED; // toggle state
      }
    });
  }
}