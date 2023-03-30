var jerry , jerryCheese
var tom
var cheeze , cheese , cheeseGroup 
var trap, cheeseTrap , trapGroup
var gameOver
var background
function preload()  {
  jerryR = loadImage("jerry_running.png")
  jerryWCheese = loadImage("jerry_cheese.png")
  tomR = loadImage("tom_running.png")
  cheeze = loadImage("cheese.png")
  cheeseTrap = loadImage("cheese_trap.png")
  gameOver = loadImage("gameOver.png")
  background = loadImage("kitchen.avif")
}

function setup() {
  createCanvas(800,400);
//create the background
bg = createSprite(400,200,windowWidth,windowHeight)
bg.addImage(background)
bg.scale = 1.3

//create Jerry
jerry = createSprite(400,350, 50,50)
jerry.addImage(jerryR)
jerry.scale = 0.08
//jerry.debug = true

//create Tom
tom= createSprite(110,325, 50,50)
tom.addImage(tomR)
tom.scale = 0.25
//tom.debug = true
tom.setCollider("rectangle",0,0,400,400)

//create cheeseGroup and trapGroup
cheeseGroup = new Group()
trapGroup = new Group()
}

function draw() {

//controlling Jerry
if(keyDown("UP_ARROW")){
  jerry.y = jerry.y-10
}
if(keyDown("DOWN_ARROW")){
 jerry.y = jerry.y+10
}


//Jerry collision with cheese
if(cheeseGroup.isTouching(jerry)){

  for(var i=0;i<cheeseGroup.length;i++){     
       
   if(cheeseGroup[i].isTouching(jerry)){
        cheeseGroup[i].destroy()
        } 
  
  }
 }

//Jerry collision with trap
if(trapGroup.isTouching(jerry)){

  for(var i=0;i<trapGroup.length;i++){     
       
   if(trapGroup[i].isTouching(jerry)){
        trapGroup[i].destroy()
        } 
  
  }
    //change Jerry's position when he touches the trap
    jerry.x = jerry.x - 50
 }

//spawn cheese
  if(frameCount%90===0){

    //giving random x and y positions for zombie to appear
    cheese = createSprite(random(600,800),350,40,40)

    cheese.addImage(cheeze)
    cheese.scale = 0.1
    cheese.velocityX = -1.9
    cheese.debug= true
    //cheeseTrap.setCollider("rectangle",0,0,400,400)
   
    cheese.lifetime = 400
    cheeseGroup.add(cheese)
  }

//spawn cheese traps
  if(frameCount%99===0){

    //giving random x and y positions for zombie to appear
    trap = createSprite(random(600,800),350,40,40)

    trap.addImage(cheeseTrap)
    trap.scale = 0.1
    trap.velocityX = -1.9
    trap.debug= true
    //cheeseTrap.setCollider("rectangle",0,0,400,400)
   
    trap.lifetime = 400
    trapGroup.add(trap)
  }

 //tom and jerry collide
 if(jerry.isTouching(tom)){

  cheeseGroup.destroyEach();
  cheeseGroup.velocityX = 0
  cheese.destroy()

  trapGroup.destroyEach();
  trap.velocityX = 0
  trap.destroy()

  over = createSprite(400,200, 170, 170)
  over.addImage(gameOver)
  over.scale = 0.3

   }
  
  drawSprites();
}
