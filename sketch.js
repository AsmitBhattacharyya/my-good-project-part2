const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var boundary1;
var boundary2;
var boundary3;
var boundary4;
var boundary5;
var boundary6;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  boundary1 = new Ground(350,300,60,10);
  boundary2 = new Ground(350,200,60,10);
  boundary3 = new Ground(50,100,60,10);
  boundary4 = new Ground(50,200,60,10);
  boundary5 = new Ground(50,300,60,10);
  boundary6  = new Ground(170,150,70,10)
  ball_options = {
    restitution: 0.95
  }
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  button1 = createImg("right.png")
  button1.position(220,30)
  button1.size(50,50)
  button1.mouseClicked(hForce)
  button2 = createImg("up.png")
  button2.position(20,30)
  button2.size(50,50)
  button2.mouseClicked(vForce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  boundary1.show();
  boundary2.show();
  boundary3.show();
  boundary4.show();
  boundary5.show();
  boundary6.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
  
} 

function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}


