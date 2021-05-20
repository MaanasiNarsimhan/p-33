var snow=[];
var girl;
var bg, bgPic;


function preload(){

bgPic= loadImage("snow1.jpg")

}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bgPic);  
  drawSprites();

  if (frameCount %90===0){
    snow.push(new Snow(random(0,800),10,15))
     console.log("hi")
     
  }
  

}