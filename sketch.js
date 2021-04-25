var fixedRect,movingRect;
function setup() {
  createCanvas(400,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  console.log(movingRect.x-fixedRect.x)

  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2) {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  drawSprites();
}
