leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;
difference=0;



function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("Pose net is Initialized!");
}

function draw()
{
    background('#969A97');
    textSize(difference);
    fill('red');
    text('Hello',rightWristX,leftWristX);
}

function gotPoses(results)
{
if (results.length > 0)
{
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log(results);
}
}


