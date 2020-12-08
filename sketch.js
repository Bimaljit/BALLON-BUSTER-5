  var background;

  var bow;

  var blueballoon;

  var pinkballoon;

  var redballoon;

  var greenballoon;

  var arrow;

  var select_Balloon;

  var score = 0;
  
  var redB;

  var greenB;
  
  var blueB;

  var pinkB;
 
  var arrowGroup;
  

function preload(){
       
 //load your images here 
   bowImage =  loadImage("bow0.png"); 
  
   red_balloonImage = loadImage("red_balloon0.png");
  
   green_balloonImage = loadImage("green_balloon0.png");
  
   blue_balloonImage = loadImage("blue_balloon0.png");
  
   pink_balloonImage = loadImage("pink_balloon0.png");
  
   backgroundImage = loadImage("background0.png");
  
   arrowImage = loadImage("arrow0.png");
  
  
  
}

function setup() {
  
  createCanvas(600, 600);
  
  //add code here
  background1 = createSprite(0,0,600,600);
  background1.scale = 2.5
  background1.addImage(backgroundImage)
  
  bow = createSprite(580, 300, 20, 50);
  bow.addImage("bow", bowImage);
  
  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group(); 
  arrowGroup = new Group();
  
  
  
   
  
  edges = createEdgeSprites();
  
}

function draw() {
  
   var select_balloon = Math.round(random(1,4));
  console.log(select_balloon);
  
  if(World.frameCount % 80===0){
    if(select_Balloon===1){
       redBalloon();
       } else if (select_balloon===2){
         greenBalloon();
       } else if (select_balloon===3){
         blueBalloon();
       }  else{
         pinkBalloon();
       } 
     }

  //add code here
  background1.velocityX = -2
  
  //giving velocity to the bow
  bow.y=mouseY
  
  //solving yhe problem of the infinte ground
  if(background1.x<0){
    background1.x = background1.width/2;
     
     
     }
  
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+5;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+6;
}



if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+8;
}
  
  

  
  if (keyDown("space")) {
    
    createArrow();
    
  }
  
  
 
  
 drawSprites(); 
  
 text("Score: "+ score, 500, 50);
     
}


function createArrow() {
  
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 60;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}

function redBalloon(){
  var red = createSprite(0, Math.round(random(20,370)) , 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function greenBalloon(){
  var green = createSprite(0, Math.round(random(20,370)) , 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function blueBalloon(){
  var blue = createSprite(0, Math.round(random(20,370)) , 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function pinkBalloon(){
  var pink = createSprite(0, Math.round(random(20,370)) , 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pinkB.add(pink);
  }

