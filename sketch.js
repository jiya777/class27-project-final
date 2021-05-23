const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint=Matter.Constraint;
const render=Matter.render

var bob1,bob2,bob3,bob4,bob5;
var roof1,rope1,rope1,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new bob(600,400,30);
bob2=new bob(540,400,30);
bob3=new bob(480,400,30);
bob4=new bob(420,400,30);
bob5=new bob(360,400,30);

roof1=new roof(500,200,400,20);
World.add(world,roof1);

rope1=new rope(bob1.body,roof1.body,100,0);
World.add(world,rope1);
rope2=new rope(bob2.body,roof1.body,50,0);
World.add(world,rope2);
rope3=new rope(bob3.body,roof1.body,-10,0);
World.add(world,rope3);
rope4=new rope(bob4.body,roof1.body,-70,0);
World.add(world,rope4);
rope5=new rope(bob5.body,roof1.body,-120,0);
World.add(world,rope5);



Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
bob5.display()
 roof1.display()
 keypressed();

  drawSprites();
 
}

function keypressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-2,y:0});
  }
}

