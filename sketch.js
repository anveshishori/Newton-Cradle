
var ground, boxleft, boxright
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5;
var r=20;
function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);
	
	
	myengine = Engine.create();
	myworld = myengine.world;
	roof = new Roof(300,50,300,20);
	//dustbin = new Dustbin(1200,650);
	bob1 = new Bob(260,250,r);
	bob2 = new Bob(280,250,r);
	bob3 = new Bob(300,250,r);
	bob4 = new Bob(320,250,r);
	bob5 = new Bob(340,250,r);
	
	rope1 = new Chain(bob1.body,roof.body,-80,0)
	rope2 = new Chain(bob2.body,roof.body,-40,0)
	rope3 = new Chain(bob3.body,roof.body,0,0)
	rope4 = new Chain(bob4.body,roof.body,40,0)
	rope5 = new Chain(bob5.body,roof.body,80,0)
	
	Engine.run(myengine);

}


function draw() {

  background("lightblue");
  //Engine.update(myengine);
    
//	keyPressed();
  
	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
   //dustbin.display();
   rope1.display()
   rope2.display()
   rope3.display()
   rope4.display()
   rope5.display()

   fill("red")
   textSize(15);
   text("Press Left key to move the balls",100,350)
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-25,y:-25});
   
  	
	}


}



