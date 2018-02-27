var pubnub = new PubNub({
  subscribeKey : 'sub-c-ebae0edc-863e-11e6-b8cb-02ee2ddab7fe'
})

var message_state = 0;

function setup(){
  createCanvas(400, 400);
  background(0);

  console.log("Subscribing..");
  pubnub.subscribe({
    channels: ['evil_overlord_command_channel'] //Change this!!!
  })
}

function draw(){

  background(0);
  textSize(20);
  fill(255, 102, 153);

  //a very simple state machine
  if(message_state==0){
    text("Under Construction", 100, 100);
  }
  else if(message_state==1){
    text("Trigger 1", 100, 100);
  }
  else{
    text("Trigger 2", 100, 100);
  }
}


pubnub.addListener({
  message: function(command){
    console.log(command);
    if(command.message=="trigger_1"){
      message_state=1;
      console.log("trigger 1 listener fired");
    }
    else if (command.message=="trigger_2"){
      message_state=2;
      console.log("trigger 2 listener fired");
    }
    else{
      message_state=0;
    }
  }
})
