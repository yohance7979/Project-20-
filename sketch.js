function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  wall=createSprite(1500,200,50,height/2)
  wall.shapeColor=color(80,80,80)
}
var speed, weight; 

function draw() {
  background(0);
  car.velocityX=speed;  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation= 0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
   
    
  }
  drawSprites();
}