const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world, ground;
var box1;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  box1 = new BOX(200,200,50,50);
  box2 = new BOX(240, 100, 50, 100);
  ground2 = new GROUND()

}

function draw() {
  background("black");  
  Engine.update(engine);
 
  box1.display();
  ground2.display();
  box2.display();
}