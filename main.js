function setup(){
    difference = 0;
    rightWristX = 0;
    leftWristX = 0;
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(390,150)
        canvas = createCanvas(550, 550);
 canvas.position(990,150);   
 poseNet = ml5.poseNet(video, modelLoaded) ;  
 poseNet.on('pose', gotPoses);

}
function modelLoaded() {
    console.log('PoseNet Is Initializated!');
}
function draw(){
    background('#87CEEB')
    document.getElementById("square_side").innerHTML = "Largura e altura serão = " + difference +"px";
fill('#1C1C1C')
textSize(difference)
text("Francisco", 10, 275);
}
function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results)
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor (leftWristX - rightWristX);
            console.log("leftWristX = " + leftWristX +"rightWristX = "+ rightWristX + "difference = " + difference);
            }
            }
                  