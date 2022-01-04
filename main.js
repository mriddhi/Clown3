noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage("https://i.postimg.cc/qMSfm86B/clown.jpg")
}

function setup(){
    canvas =createCanvas (300,300);
    canvas.center();
    video = createCapture(VIDEO) ;
    video.size (300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

   
}
function modelLoaded(){
console.log('PoseNet is Initializing')
}

function draw(){
image(video, 0,0,300,300);
circle(noseX,noseY,20)
fill (255,0,0);
stoke(255,0,0);
image(clown_nose,noseX,noseY,30,30); 
}
function take_snapshot(){
    save('myFilterImage.png') 
}

function gotPoses (results){
    console.log(results);
noseX=results[0].pose.nose.X;
noseY=results[0].pose.nose.Y;
console.log("noseX="+noseX);
console.log("noseY="+noseY);



}
console.log(results);
noseX=results[0].pose.nose.X;
noseY=results[0].pose.nose.Y;
console.log("noseX="+noseX);
console.log("noseY="+noseY);


{
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x)
        console.log("nose y="+results[0].pose.nose.y)
    }
}
