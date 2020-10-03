var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;

 object1 = createSprite(200,100,60,90);
 object1.shapeColor = "white";
 
 object2 = createSprite(200,800,60,90);
 object2.shapeColor = "white";

 object1.velocityY = 4;
 object2.velocityY = -4;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounce(object1,object2);
  bounceoff(movingRect,fixedRect);
  drawSprites();
}


