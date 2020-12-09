
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	paper1=new Paper(200,100,140);
	Dust1=new Dustbin(480,600,20,100)
	Dust2=new Dustbin(340,640,255,20)
	Dust3=new Dustbin(200,600,20,100)
ground=new Ground(200,680,500,20);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  Dust1.display();
  Dust2.display();
  Dust3.display();
 ground.display();
  drawSprites();
 
}
function KeyPressed(){
if(keyCode ===UP_ARROW ){
Matter.Bodies.applyForce(paper1.body,paper1.body.position,{x:85,y:-85 })

}

}



