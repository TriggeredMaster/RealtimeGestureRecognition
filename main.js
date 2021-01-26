NoseX= 0;
NoseY= 0;
difference= 0;
rightwristX= 0;
leftwristX= 0;
function preload(){
    img=loadImage('https://i.postimg.cc/fkQs3FNk/chinmaya.jpg'); 
}

function setup(){
    canvas= createCanvas(550,550);
    canvas.position(560,150)
    Video= createCapture(VIDEO);
    Video.size(550,500);
    Posenet= ml5.poseNet(Video,ModelLoaded);
    Posenet.on('pose',gotPoses)
}

function ModelLoaded(){
    console.log("Model Loaded!");
}

function draw(){
    background("grey");
    fill("pink");
    stroke("black");
    square(NoseX,NoseY, difference);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        NoseX= results[0].pose.nose.x;
        NoseY= results[0].pose.nose.y;
        leftwristX= results[0].pose.leftWrist.x;
        rightwristX= results[0].pose.rightWrist.x;
        difference= floor(leftwristX-rightwristX);
    }
}