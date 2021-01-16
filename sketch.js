
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImg,launcherObject;

function preload()
{
	boyImg = loadImage("boy.png");
	tree = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj=new Stone(235,420,30);
	boy = createSprite(200,550);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	tree = new Tree(900,350,30,300);
	ground = new Ground(600,600,2000,20);
	mango1 = new Mango(900,250,15);
	mango2 = new Mango(800,200,15);
	mango3 = new Mango(800,280,15);
	mango4 = new Mango(1000,250,15);
	mango5 = new Mango(670,300,15);
	stone = new Stone(150,550,15);
	launcherObject=new Launcher(stone.body,{x:235,y:420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);


  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	
	function mouseReleased(){
		launcherObject.fly();
	}

function detectCollision(stone,mango){
mangoBodyPosition=mangobody.position
stoneBodyPosition=stonebody.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false);
}
}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:150,y:500})
		launcherObject.attach(stoneObj.body);
	}
}


