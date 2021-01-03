var bullet,bullet2;
var wall,wall2;
var speed;
var weight;
var thickness;

function setup(){
  createCanvas(1600,400);

 speed=random(55,90)
  weight=random(400,1500)

  bullet=createSprite(50,200,50,5);
  
  bullet.shapeColor=color(255)
  bullet.velocityX=speed;

  
 

  wall=createSprite(800,200,50,height/2);
  wall.shapeColor=color(80,80,80)
 

   

}

function draw(){
background("black");


hasCollided();


if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5 *weight *speed *speed/(thickness *thickness*thickness)

if(damage>10){
  wall.shapeColor=color(255,0,0)
}


if(damage<10){
  wall.shapeColor=color(0,255,0)
}
















}

drawSprites();
}


function hasCollided(bullet2,wall2)
{
   bulletRightEdge=bullet2.x +bullet2.width;
   wallLeftEdge=wall2.x;
   if(bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
   return false;


}
