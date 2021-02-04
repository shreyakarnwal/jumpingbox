var canvas;
var music;
var object1,object2,object3,object4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    object1=createSprite(100,400,190,10);
    object1.shapeColor="pink";

    object2=createSprite(300,400,190,10);
    object2.shapeColor="red";

    object3=createSprite(500,400,190,10);
    object3.shapeColor="green";

    object4=createSprite(700,400,190,10);
    object4.shapeColor="blue";


    //create box sprite and give velocity
    box = createSprite(random(20,780),random(50,400),20,20);
    box.shapeColor="white";
    box.velocityX=2;
    box.velocityY=3;

    

}

function draw() {
    background(0);
    //create edgeSprite
    edges=createEdgeSprites();
    
    box.bounceOff(edges);
    //box.bounceOff(bottomEdge);


    //add condition to check if box touching surface and make it box
    if(object1.isTouching(box) && box.bounceOff(object1)){
        box.shapeColor="pink"
        music.play();
    }
    if(object2.isTouching(box) && box.bounceOff(object2)){
        box.shapeColor="red";
        box.velocityX=0;
        box.velocityY=0;
        //music.stop();
    }
    if(object3.isTouching(box) && box.bounceOff(object3)){
        box.shapeColor="green";
       
    }
    if(object4.isTouching(box) && box.bounceOff(object4)){
        box.shapeColor="blue";
        
    }
    
    drawSprites();
}
