rightWristX = 0;
rightWristY = 0;

scorerightWrist = 0;

function preload(){

}

function setup(){
    canvas = createCanvas(550, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(800, 400);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
        if(results.length > 0)
        {
          console.log(results);
          noseX = results[0].pose.nose.x;
          noseY = results[0].pose.nose.y;
        }
    }

function gotResult(){
    if(results.length > 0 ){
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}

function draw(){
    if(scorerightWrist > 0.2){
        fill('#FF0000');
        stroke('#FF0000');
        circle(rightWristX, rightWristY, 100);
    }
}