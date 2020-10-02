const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("sprites/board.png");
}

function setup(){
    var canvas = createCanvas(860,560);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
}