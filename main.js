img="";
status="";
object=[];


function preload(){

img=loadImage('dog_cat.jpg');

}

function setup(){

canvas= createCanvas(380,380);
canvas.center();


video= createCapture(VIDEO);
video.size(380,380);
video.hide();

}

function draw(){

image(video,0,0,380,380)

if(status!=""){

r=random(255);
g=random(255);
b=random(255);

objectDetector.detect(video,gotResults);
for(i=0;i<object.length;i++){

document.getElementById("status").innerHTML="object is detected";
document.getElementById("number").innerHTML="number of object are "+object.length;



fill(r,g,b);
percent=floor(object[i].confidence*100);
text(object[i].label+""+percent+"%",object[i].x,object[i].y);
noFill();
stroke(r,g,b);
rect(object[i].x,object[i].y,object[i].width,object[i].height);



}
}
}
function modalLoaded(){

console.log("modal is loaded");
status=true;
objectDetector.detect(video,gotResults);

}


function gotResults(error,results){

if(error){

    console.error(error);
    
}

else{

console.log(results);
object=results;

}


}

function start(){

    objectDetector=ml5.objectDetector('cocossd',modalLoaded);
    document.getElementById("status").innerHTML="detecting object";



}
