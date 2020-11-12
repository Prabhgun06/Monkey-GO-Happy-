
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();

 
  
}


function draw() {
  background(173,255,47);
  if(keyDown("space")&& monkey.y >= 100) {
  monkey.velocityY = -12;
  }
 monkey.velocityY = monkey.velocityY + 0.8
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
   monkey.collide(ground);
  
 Food();

  Obstacles();
 
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime:"+survivalTime,100,50);
   
  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX = 0;
    obstaclesGroup.setVelocityXEach (0);
    FoodGroup.setVelocityXEach(0);
    FoodGroup.setLifetimeEach(-1);
    obstaclesGroup.setLifetimeEach(-1);
    survivalTime=0;
    }
  
  
  
drawSprites();
  
}
function Food(){
 if (frameCount % 80 === 0) {
     banana = createSprite(600,100,40,10);
   banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.10;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 190;
    
    //adjust the depth
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    
   FoodGroup.add(banana);
   
    }
}
  function Obstacles(){
    if (frameCount % 80 === 0){
   var obstacle = createSprite(290,330,10,40);
     obstacle.addImage(obstacleImage);
   obstacle.velocityX = -3;
      
      //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.15;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}
  







