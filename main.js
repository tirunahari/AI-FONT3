difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

   canvas = createCanvas(600, 500);
   canvas.position(80, 200);

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log('PoseNet is intialized');
}

function draw()
{
    background('black');
    document.getElementById("font_size").innerHTML = "Font size of the text will be = "+ difference + "px";
    fill('white');
    text('Radhekrishn', 50, 400);
    textSize(difference);
}
function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " +leftWristX +"rightWristX = " + rightWristX + "difference = " + difference);
    }
}