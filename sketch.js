const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1, box2, pig, log1;
var box3, box4, pig2, log2;
var box5, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 390, 1200, 20);

    bird = new Bird(100, 100);

    //Las especificaciones van en los parentesis
    box1 = new Box(700, 300, 70, 70);
    box2 = new Box(900, 300, 70, 70);

    pig = new Pig(800, 300);

    //Los ángulos se indican con RADIANES 
    //PI = 180°
    log1 = new Log(800, 280, 270, PI/2);

    box3 = new Box(700, 250, 70, 70);
    box4 = new Box(900, 250, 70, 70);

    pig2 = new Pig(800, 250);
    log2 = new Log(800, 200, 270, PI/2);

    box5 = new Box(800, 180, 70, 70);

    log3 = new Log(760, 120, 150, PI/7);
    log4 = new Log(870, 120, 150, -PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    bird.display();

    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
}