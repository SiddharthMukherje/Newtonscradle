
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var world
var sling1
function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);





	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new Bar(400,250,230,20)
	groundObject=new Ground(width/2,670,width,20);

ball1=new Newtonball(320,575,40);
ball2=new Newtonball(360,575,40);


sling1 = new Slingshot(ball1.body,box1.body,-80,0);
sling2=new Slingshot(ball2.body,box1.body,-40,0)

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45})
	}
	}
	

function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  groundObject.display();
  ball1.display();
  ball2.display();
  sling1.display();
  sling2.display();
}



