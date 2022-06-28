var ball;
var database;
var position;
var canvas;
var bg;
var gameState = 0;
var playerCount;
var form;
var player;
var game;
var allPlayers;
var distance = 0;
var cars, car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img, track;

function preload(){
    car1Img = loadImage("sprites/car1.png");
    car2Img = loadImage("sprites/car2.png");
    car3Img = loadImage("sprites/car3.png");
    car4Img = loadImage("sprites/car4.png");
    track = loadImage("sprites/track.jpg");
}

function setup(){
    database = firebase.database();
    canvas = createCanvas(displayWidth,displayHeight);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount == 4){
        game.update(1);
    }
    if(gameState == 1){
        clear();
        game.play();
    }
}