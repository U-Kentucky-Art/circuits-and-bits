var button_on, button_off;
function setup() {
  createCanvas(200, 200);
  background(0);
  
  button_on = createButton('LED ON');
  button_off = createButton('LED OFF');
  button_on.position(20, 20);
  button_off.position(100, 20);
  button_on.mousePressed(TurnOn);
  button_off.mousePressed(TurnOff);
}

function TurnOn(){
 console.log("send ON command to Photon");
  httpGet('/on', function(response){
    console.log(response)
  })
}

function TurnOff(){
  console.log("send OFF command to Photon"); 
    httpGet('/off', function(response){
    console.log(response)
  })
}