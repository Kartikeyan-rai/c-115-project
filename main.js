function preload(){

}
function setup(){
    canvas=createCanvas(300,350);
    canvas.center();
    video=createCapture();
    video.size(300,350);
    video.hide()

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("model loaded")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x"+results[0].pose.nose.x);
        console.log("nose y"+o-results[0].pose.nose.y);
    }
}
function draw(){
    image(video,0,0,300,350)
}
function take_snapshot(){
    save('My_filter_image.png')
}