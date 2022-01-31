song ="";
harry = "";
poke = "";
beliver = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";




function preload(){
  harry = loadSound("music.mp3");
    poke = loadSound("pokemmon.mp3");
    beliver = loadSound("Believer.mp3");

}


function setup(){
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose' , gotPoses);
}

function gotPoses(results){
  if(results.length > 0){
   console.log(results);
   scoreLeftWrist = results[0].pose.keypoints[9].score;
   console.log("Score left wrist = " + scoreLeftWrist);

   leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y
console.log("leftWrist x = " +leftWristX+"leftWristY = " +leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y
console.log("rightWrist x = " +rightWristX+"rightWristY = " +rightWristY);


  }
}

function modelLoaded(){
console.log("Posenet is Ready");
}

function draw(){
image(video,0,0,600,500);

fill("#FF0000");
stroke("#FF0000");

if(scoreLeftWrist > 0.2){


circle(leftWristX,leftWristY,20);
InNumberleftWristY = Number(leftWristY);
remove_decimals = floor(InNumberleftWristY);
volume = remove_decimals/500;
document.getElementById("volume").innerHTML = "Volume = " + volume;
song.setVolume(volume);
}
}


function play(){

  

  var name1 = document.getElementById("name").value;
  if(name1 == "harry"){
    
     song = harry;

     }
   if(name1 == "poke"){
          
     song = poke;
     
     }
   if(name1 == "beliver"){
     
   song = beliver;
     
      }
    
	song.play();

  song.setVolume(1);
  song.rate(1);
}


function pause(){
    song.pause();
    }

    function stop(){
        song.stop();
        }


        

