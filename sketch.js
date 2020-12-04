
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,370,1200,20)
	ground1 = new Ground(600,370,1200,20)
	ball = new Paper(50,365,40)
	wall1 = new Dustbin(1000,352,200,15)
	wall2 = new Dustbin(1000,352,200,15)
	wall3 = new Dustbin(893,297,15,125)
	wall4 = new Dustbin(1100,297,15,125)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  ground1.display()
  ball.display()
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}



