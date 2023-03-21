noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('PoseNet is initialized');
}
function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX= "+noseX+" noseY= "+noseY);
leftWristX=results[0].pose.leftwrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("leftWristX= "+leftWristX+" rightWristX= "+rightWristX+" difference= "+difference);
}
}
function draw(){
background('#969A97');
fill('#F90093');
stroke('#F90093');
square(noseX,noseY,100);
text("Dominic",10,100);
textSize(difference);
}
