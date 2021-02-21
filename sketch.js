
function preload(){
  BTank1IMG=loadImage("images/BTank1.png");
  BTank2IMG=loadImage("images/BTank2.png");
  BTank3IMG=loadImage("images/BTank3.png");
  BTank4IMG=loadImage("images/BTank4.png");
  RTank1IMG=loadImage("images/RTank1.png");
  RTank2IMG=loadImage("images/RTank2.png");
  RTank3IMG=loadImage("images/RTank3.png");
  RTank4IMG=loadImage("images/RTank4.png");

  BG1IMG=loadImage("images/Hit-the-Beach.jpg");

  SB1IMG=loadImage("images/StartButton.jpg");
}
function setup() {
  createCanvas(700,600);
  edges=createEdgeSprites();
  
  Btank=createSprite(60,60,50,50);
  Btank.addImage(BTank1IMG);
  Btank.scale=0.4;
  Rtank=createSprite(650,40,50,50);
  Rtank.addImage(RTank1IMG);
  Rtank.scale=0.4;

  wall1=createSprite(130, 50,20, 120);
  wall1.shapeColor="darkgreen";
  wall2=createSprite(70, 160,300, 20);
  wall2.shapeColor="darkgreen";
  wall3=createSprite(240,160,300,20);
  wall3.shapeColor="darkgreen";
  wall4=createSprite(260, 50,20, 120);
  wall4.shapeColor="darkgreen";

   wall5 = createSprite(380,100,20,120);
 wall5.shapeColor = "darkgreen";

   wall6 = createSprite(455,120,20,250);
 wall6.shapeColor = "darkgreen";

   wall7 = createSprite(400,235,120,20);
 wall7.shapeColor = "darkgreen";

   wall8 = createSprite(335,285,20,120);
 wall8.shapeColor = "darkgreen";

   wall9 = createSprite(230,235,120,20);
 wall9.shapeColor = "darkgreen";

   wall12 = createSprite(120,400,20,120);
 wall12.shapeColor = "darkgreen";

   wall13 = createSprite(280,285,20,120);
 wall13.shapeColor = "darkgreen";

   wall14 = createSprite(110,235,120,20);
 wall14.shapeColor = "darkgreen";

   wall15 = createSprite(60,300,20,120);
 wall15.shapeColor = "darkgreen";

 wall16=createSprite(235,450,220,20);
 wall16.shapeColor="darkgreen";

 wall17=createSprite()

   wall10 = createSprite(200,340,180,20);
 wall10.shapeColor = "darkgreen";

   wall11 = createSprite(335,380,20,120);
 wall11.shapeColor = "darkgreen";

}

function draw() {
  background("black");  
  
  if (keyDown(UP_ARROW)){
   Rtank.y=Rtank.y-5;
  }
  
  if (keyDown(DOWN_ARROW)){
    Rtank.y=Rtank.y+5;
   }
  
   if (keyDown(RIGHT_ARROW)){
    Rtank.x=Rtank.x+5;
   }
   
   if (keyDown(LEFT_ARROW)){
    Rtank.x=Rtank.x-5;
   } 
   if (keyDown("w")){
    Btank.y=Btank.y-5;
   }
   
   if (keyDown("s")){
    Btank.y=Btank.y+5;
    }
   
    if (keyDown("d")){
      Btank.x=Btank.x+5;
    }
    
    if (keyDown("a")){
      Btank.x=Btank.x-5;
    }
    Rtank.collide(edges);
    Btank.collide(edges);
  drawSprites();
  
  textSize(30); 
  fill("white"); 
  text(mouseX + "," + mouseY,30,30);
}