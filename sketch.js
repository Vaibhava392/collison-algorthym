var fixed, moving

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(400, 200, 50, 70);
}

function draw() {
  background(0);  
  moving.x = mouseX;
  moving.y = mouseY;
  if (moving.width/2 + fixed.width/2 > moving.x - fixed.x && moving.width/2 + fixed.width/2 > fixed.x - moving.x 
    && moving.height/2 + fixed.height/2 > moving.y - fixed.y && moving.height/2 + fixed.height/2 > fixed.y - moving.y ){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  } else {
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  }
  drawSprites();
}