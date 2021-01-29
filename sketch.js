const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone;
var sling;
var gameState;
var block;
function setup() {
  createCanvas(1480,800);

  engine = Engine.create();
  world = engine.world;

 stone=new Ground(100,300,60)
 sling=new SlingShot(stone.body,{x:230,y:160})
 sling1=new SlingShot(stone.body,{x:300,y:160})
block=new G(880,200,30,60)
block1=new G(880,260,30,60)
block2=new G(850,260,30,60)
block3=new G(880,320,30,60)
block4=new G(910,260,30,60)
block5=new G(820,320,30,60)
block6=new G(850,320,30,60)
block7=new G(910,320,30,60)
block8=new G(940,320,30,60)
block9=new G(790,380,30,60)
block10=new G(1000,320,30,60)
}

function draw() {
  background("blue");  
  Engine.run(engine)
  fill("black")
  textSize(20)
  text("Drag the Hexagonal Stone and  Release it,launch it towards the block",400,80)
stone.display();
sling.display();
sling1.display();
block.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
}







function mouseDragged(){
  if (gameState!=="launched"){
    Matter.Body.setPosition(stone.body, {x:mouseX , y: 121});
    
      }

}


function mouseReleased(){
  
  gameState="launched";
}
function keyPressed(){
  if(keyCode === 32){ 
     Matter.Body.setPosition(stone.body,{x:200,y:50})
  sling.attach(stone.body);
  stone.fly();
}
}