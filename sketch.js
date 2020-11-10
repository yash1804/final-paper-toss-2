
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var ground;
var ball1;
var dustbin5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    dustbin1 = new Dustbin(570,670,90,20);
    dustbin3 = new Dustbin(615,630,5,90);
    dustbin4 = new Dustbin(525,630,5,90);
    ground = new Ground(400,685,1000,20);
    ball1 = new Ball(170,350,40,40);
    dustbin5 = new Dustbin2(570,630,100,100)
	Engine.run(engine);
   keyPressed();
   
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
    dustbin1.display();
    dustbin3.display();
    dustbin4.display();
    ground.display();
    ball1.display();
    dustbin5.display();
    
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(ball1.body,ball1.body.postion,{x:150,y:-200});
  
  }
  }





