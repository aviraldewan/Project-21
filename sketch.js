var canvas;
var music;
var sur1, sur2, sur3, sur4, box, muscie;

function preload(){
    musice = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    sur1 = createSprite(1,800,150,30);
    sur1.shapecolor = 'blue';

    sur2 = createSprite(200,800, 150, 30);
    sur2.shapeColor = 'yellow';

    sur3 = createSprite(400, 800, 150, 30);
    sur3.shapecolor = 'purple';

    sur4 = createSprite(600, 800, 150, 30);
    sur4.shapecolor = 'green';

    //create box sprite and give velocity
    box = createSprite(random(20,750),10, 20, 20);
    box.shapecolor = 'white';
    box.velocityY = 10;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();

    //add condition to check if box touching surface and make it box
    if(sur1.isTouching(box) && box.bounceOff(sur1))
    {
        box.shapeColor = 'blue';
        box.playSound(musice);
        box.velocityY = 0;
    }
    else if(sur2.isTouching(box) && box.bounceOff(sur2))
    {
        box.shapeColor = 'yellow';
        box.playSound(musice);
        box.velocityY = 0;
    }
    else if(sur3.isTouching(box) && box.bounceOff(sur3))
    {
        box.shapeColor = 'purple';
        box.playSound(musice);
        box.velocityY = 0;
    }
    else if(sur4.isTouching(box) && box.bounceOff(sur4))
    {
        box.shapeColor = 'green';
        box.playSound(musice);
        box.velocityY = 0;
    }
}
