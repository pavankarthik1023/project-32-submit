const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box10;
var box5,box6,box7,box8,box9;
var base;
var chain;
var  hero;
var score = 0;
var bg="images/view.jpg";
var backgroundImg;
function preload() {
  getBackgroundImg();
 
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(430,235,30,40);
  box2 = new Box(460,235,30,40);
  box3 = new Box(490,235,30,40);
  box4 = new Box(520,235,30,40);

  box5= new Box(445,195,30,40);
  box6= new Box(475,195,30,40);
  box7= new Box(515,195,30,40);

  box8=new Box(460,155,30,40);
  box9=new Box(490,155,30,40);

  box10= new Box(445,115,30,40);

  base= new Ground(475,250,800,20);
  hero= new Hero(200,100,50,500);
  chain= new Chain(hero.body,{x:200,y:100});
}





function draw() {
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)


box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box9.display();
box8.display();
box10.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();

base.display();
hero.display();
chain.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
      chain.attach(hero.body);
     hero.trajectory=[];
     Matter.Body.setPosition(hero.body, {x: 200 , y: 50});
  
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=14){
      bg = "images/base.png";
  }
  else{
      bg = "images/view.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(hour);
}