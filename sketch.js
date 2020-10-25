
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,tree,stone,rope;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
	

}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground= new Ground (400,350,800,20);
  mango1 = new Mango(400,150);
  mango2 = new Mango(450,120);
  mango3= new Mango(520,160);
  mango4= new Mango(580,80);
  mango5= new Mango(480,30);
  mango6= new Mango(600,100);
  mango7= new Mango(750,100);
  mango8= new Mango(680,70);
  stone = new Stone(75,255);
	rope = new Throw (stone.body,{x:75,y:255});
	
	Engine.run(engine);
  
}

function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(220);
  image(boy,50,225,150,150);
  image(tree,350,-5,450,370);
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  rope.display(); 
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
   }
   
   function mouseReleased()
   {
	     rope.fly();
   }
 
   function game(){
    stone. mangoTouched();
   }


