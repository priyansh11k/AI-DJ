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
   scoreRightwrist = results[0].pose.keypoints[10].score;
  
   scoreLeftWrist = results[0].pose.keypoints[9].score;
   console.log("Score left wrist = " + scoreLeftWrist);
   console.log("scoreRightwrist =" +scoreRightwrist + "scoreLeftWrist =" + scoreLeftWrist);
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

if(scoreRightwrist > 0.2){
circle(rightWristX,rightWristY,20);

if(rightWristY >00 && rightWristY <=100){
  document.getElementById("speed").innerHTML = "Speed =  0.5x";
  song.rate(0.5);
  }
  else if(rightWristY >100 && rightWristY <=200){
  document.getElementById("speed").innerHTML = "speed = 1x";
  song.rate(1);
  }
  else if(rightWristY>100 && rightWristY <=200){
  document.getElementById("speed").innerHTML = "Speed = 1.5x";
  song.rate(1.5);
  }
  else if (rightWristY>300 && rightWristY <=400) {
    document.getElementById("speed").innerHTML = "Speed = 2x";
    song.rate(2);
  }
  else if(rightWristY>400 && rightWristY<=500){
  document.getElementById("speed").innerHTML = "Speed = 2.5x";
  song.rate(2.5);
  }

}


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


        

