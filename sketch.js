var redcar,silvercar,yellowcar,road;
var silvercarImg,redcarImg,yellowcarImg,roadImg;
var carsGroup

var cars , obstacle;
var score=0;



function preload(){

redcarImg=loadImage('redcar.png');
silvercarImg=loadImage('silvercar.png');
yellowcarImg=loadImage('yellowcar.png');
roadImg=loadImage('road.png');

}

function setup() 
{
createCanvas(windowWidth,windowHeight);

road = createSprite(windowWidth,windowHeight);
road.addImage(roadImg);
road.velocityY = 5;
road.scale = 0.5;

silvercar = createSprite(100,600,30,30);
silvercar.addImage("silvercar",silvercarImg);
silvercar.scale=0.5
silvercar.setCollider("rectangle",0,0,silvercar.width,silvercar.height);


redcar = createSprite(400,200,30,30);
redcar.addImage("redcar",redcarImg);
redcar.scale=0.5
redcar.velocityX = 5;
redcar.setCollider("rectangle",0,0,redcar.width,redcar.height);

yellowcar = createSprite(400,400,30,30);
yellowcar.addImage("yellowcar",yellowcarImg);
yellowcar.scale=0.5;
yellowcar.velocityX = -5;
yellowcar.setCollider("rectangle",0,0,yellowcar.width,yellowcar.height);

yellowcarsGroup = new Group();
redcarsGroup = new Group();

}

function draw() 
{
background(roadImg);

edges = createEdgeSprites();
silvercar.bounceOff(edges);
redcar.bounceOff(edges);
yellowcar.bounceOff(edges);

silvercar.x = World.mouseX;


if(keyDown(UP_ARROW)){
silvercar.velocityY = -3;
}

spawncars();

if(silvercar.isTouching(yellowcarsGroup||redcarsGroup)){
yellowcar.velocityX = 0;
road.velocityY = 0;
redcar.velocityX = 0;
silvercar.velocityY = 0;
text("Game Over",600,400);
textSize(30);

}



drawSprites();

function spawncars(){
 if (frameCount % 60 === 0){
   var cars = createSprite(600,165,10,40);
   cars.velocityY = -(6 + score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      
      case 1: redcar.addImage(redcarImg);
              break;
      case 2: yellowcar.addImage(yellowcarImg);
              break;
      default: break;
    }

yellowcarsGroup.add(yellowcar);
redcarsGroup.add(redcar);




}



 }
}