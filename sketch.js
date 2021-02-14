const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var ground;

var hammer;

var rock1, rock2, rock3, rock4;

var rubber1, rubber2, rubber3;

var iron1, iron2;

var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9;

var mCon;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1440, 720);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 700, width, 40, [150, 75, 0]);

	hammer = new Hammer(500, 100);

	rock1 = new Rock(500, 500, 10, "gray");
	rock2 = new Rock(550, 500, 15, "gray");
	rock3 = new Rock(650, 500, 30, "gray");

	rubber1 = new Rubber(600, 0, 70, 30, "brown");

	sand1 = new Sand(710, 100, 5, [194, 178, 128]);
	sand2 = new Sand(720, 500, 5, [194, 178, 128]);
	sand3 = new Sand(730, 0, 5, [194, 178, 128]);
	sand4 = new Sand(740, 500, 5, [194, 178, 128]);
	sand5 = new Sand(720, 500, 5, [194, 178, 128]);
	sand6 = new Sand(720, 400, 5, [194, 178, 128]);
	sand7 = new Sand(770, 400, 5, [194, 178, 128]);
	sand8 = new Sand(780, 300, 5, [194, 178, 128]);
	sand9 = new Sand(790, 200, 5, [194, 178, 128]);

	rock4 = new Rock(740, -100, 20, "gray");
	
	var canvasMouse = Mouse.create(canvas.elt);
	canvasMouse.pixelRatio = pixelDensity();

	var mCOpt = 
	{
		mouse: canvasMouse
	}

	mCon = MouseConstraint.create(engine, mCOpt);

	World.add(world, mCon);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  textAlign(CENTER);
  textSize(30);
  text("Drag the bodies around...", width/2, 200);

  hammer.display(true);
  ground.display(true);
  rock1.display(true);
  rock2.display(true);
  rock3.display(true);
  rubber1.display(true);
  sand1.display(true);
  sand2.display(true);
  sand3.display(true);
  sand4.display(true);
  sand5.display(true);
  sand6.display(true);
  sand7.display(true);
  sand8.display(true);
  sand9.display(true);
  rock4.display(true);

  drawSprites();
}