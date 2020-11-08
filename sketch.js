const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var border1;

var balls = [];
var plinkos = [];
var divisions = [];

var divHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	border1 = new Ground(240, 800, 480, 20);
	border2 = new Ground(0, 400, 20, 800);
	border3 = new Ground(240, 0, 480, 20);
	border4 = new Ground(480, 400, 20, 800);


	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);

	findMousePos();

	for(var i = 0; i <= 480; i = i + 80){
		var div;
		divisions.push(new division(i, 645, 10, divHeight));
		div = createSprite(i, 645, 10, divHeight);
	}

	for(var x = 40; x <= 480; x=x+50){
		plinkos.push(new plinko(x, 75, 10));
		ellipse(x, 75, 20, 20);
	}
	for(var x = 15; x <= 480-10; x=x+50){
		plinkos.push(new plinko(x, 175, 10));
		ellipse(x, 175, 20, 20);
	}
	for(var x = 40; x <= 480; x=x+50){
		plinkos.push(new plinko(x, 275, 10));
		ellipse(x, 275, 20, 20);
	}
	for(var x = 15; x <= 480-10; x=x+50){
		plinkos.push(new plinko(x, 375, 10));
		ellipse(x, 375, 20, 20);
	}

	if(frameCount%60===0){
		// var ball1;
		// var color1 = color(random(0, 255), random(0, 255), random(0, 255));
		balls.push(ball1 = new ball(random(480/2-10, 480/2+10), 10, 10));
		// fill(color1);
		// ellipse(ball1.body.position.x, ball1.body.position.y, 20, 20);
	}

	for(var j = 0; j < balls.length; j++){
		balls[j].display();
	}

	// if(frameCount%60===0){
	// 	var ball1 = new ball(random(480/2-10, 480/2+10), 10, 10);
	// 	ball1.display();
	// }
  
	drawSprites();

	border1.display();
	border2.display();
	border3.display();
	border4.display();
}

function findMousePos(){
	var argument;
	argument = 1;
	if(keyWentDown(32) && argument === 1){
		print("{"+"x: "+ mouseX + ", y: "+ mouseY+"}");
		argument = 0;
		argument = 1;
	}
}

