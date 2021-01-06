
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bottomSquare,leftSquare,rightSquare;
var paperBall;

function preload(){
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100,100,20);
	ground = new Ground(700,700,1500,50);
	bottomWall = new Walls(900,650,200,20);
	rightWall = new Walls(800,600,20,100);
	leftWall = new Walls(1000,600,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

paperBall.display();
ground.display();
bottomWall.display();
rightWall.display();
leftWall.display();

  
  drawSprites();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:70,y:-85});
	}
}

