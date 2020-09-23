
var leftWall, rightWall, upWall, downWall;
var paddle, paddleIMG, ball,ballIMG;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15;
var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15;
var gameState, lives, point,over,overIMG,bg;

function preload(){

    ballIMG = loadImage("Images/Ball1.png");
    paddleIMG = loadImage("Images/Paddle2.png");
    overIMG = loadImage("Images/Game_Over.png");
    bg = loadImage("Images/bg.jpg");
}

function setup(){
    canvas = createCanvas(displayWidth,(displayHeight-100));

    leftWall = createSprite(5,(displayHeight-100)/2, 20,(displayHeight-100));
    leftWall.shapeColor = "red";

    rightWall = createSprite(displayWidth-5,(displayHeight-100)/2, 20,(displayHeight-100));
    rightWall.shapeColor = "red";

    upWall = createSprite(displayWidth/2,5,(displayHeight-100)*2,20);
    upWall.shapeColor = "red";

    downWall = createSprite(displayWidth/2,(displayHeight-100)-5,displayWidth,20);
    downWall.shapeColor = "red";


    paddle = createSprite(displayWidth/2,(displayHeight-100)-40, 100,15);
    paddle.addImage(paddleIMG);
    paddle.scale = 0.5;
    paddle.debug = false;
    paddle.setCollider("rectangle",0,0,230,40);
    //paddle.shapeColor = "DarkMagenta"; 

    ball = createSprite(displayWidth/2,(displayHeight-100)-100,20,20);
    ball.addImage(ballIMG);
    ball.scale = 0.07;
    //ball.shapeColor = "Gold";



    b1 = createSprite(displayWidth/2,((displayHeight-100)/2)+125,150,40);
    b1.shapeColor = "Crimson";
    c1 = 3;

    b2 = createSprite(displayWidth/2,((displayHeight-100)/2)-125,150,40);
    b2.shapeColor = "Crimson";
    c2 = 3;

    b3 = createSprite((displayWidth/2)-300,(displayHeight-100)/2,150,40);
    b3.shapeColor = "Crimson";
    c3 = 3;

    b4 = createSprite((displayWidth/2)+300,(displayHeight-100)/2,150,40);
    b4.shapeColor = "Crimson";
    c4 = 3;

    b5 = createSprite((displayWidth/2)-150,((displayHeight-100)/2)-75,150,40);
    b5.shapeColor = "Crimson";
    c5 = 3;

    b6 = createSprite((displayWidth/2)+150,((displayHeight-100)/2)-75,150,40);
    b6.shapeColor = "Crimson";
    c6 = 3;

    b7 = createSprite((displayWidth/2)-150,((displayHeight-100)/2)+75,150,40);
    b7.shapeColor = "Crimson";
    c7 = 3;

    b8 = createSprite((displayWidth/2)+150,((displayHeight-100)/2)+75,150,40);
    b8.shapeColor = "Crimson";
    c8 = 3;

    b9 = createSprite(displayWidth/2,((displayHeight-100)/2)-75,100,40);
    b9.shapeColor = "FireBrick";
    c9 = 2;

    b10 = createSprite(displayWidth/2,((displayHeight-100)/2)+75,100,40);
    b10.shapeColor = "FireBrick";
    c10 = 2;

    b11 = createSprite((displayWidth/2)-150,(displayHeight-100)/2,125,40);
    b11.shapeColor = "FireBrick";
    c11 = 2;

    b12 = createSprite((displayWidth/2)+150,(displayHeight-100)/2,125,40);
    b12.shapeColor = "FireBrick";
    c12 = 2;

    b13 = createSprite(displayWidth/2,(displayHeight-100)/2,125,40);
    b13.shapeColor = "Maroon";
    c13 = 1;

    gameState = "intro";

    lives = 2;

}

function draw(){
    background(bg);


    if(gameState === "intro"){
        b1.visible = false;
        b2.visible = false;
        b3.visible = false;
        b4.visible = false;
        b5.visible = false;
        b6.visible = false;
        b7.visible = false;
        b8.visible = false;
        b9.visible = false;
        b10.visible = false;
        b11.visible = false;
        b12.visible = false;
        b13.visible = false;

        leftWall.visible = false;
        rightWall.visible = false;
        upWall.visible = false;
        downWall.visible = false;

        ball.visible = false;
        paddle.visible = false;

        fill("Gold");
        textSize(40);
        text("The goal of the game is to break all of the bricks.",(displayWidth/2)-500,((displayHeight-100)/2)-50);
        textSize(40);
        text("Start the game by pressing s and launch the ball by pressing space.",(displayWidth/2)-500,(displayHeight-100)/2);
        textSize(40);
        text("You will have 2 lives. Good Luck!",(displayWidth/2)-500,((displayHeight-100)/2)+50);
        console.log(gameState);

    }

    if(keyDown("s") && gameState === "intro"){
        gameState = "serve";
        console.log(gameState);
    }

    if(gameState === "serve"){
        b1.visible = true;
        b2.visible = true;
        b3.visible = true;
        b4.visible = true;
        b5.visible = true;
        b6.visible = true;
        b7.visible = true;
        b8.visible = true;
        b9.visible = true;
        b10.visible = true;
        b11.visible = true;
        b12.visible = true;
        b13.visible = true;

        /*leftWall.visible = true;
        rightWall.visible = true;
        upWall.visible = true;
        downWall.visible = true;*/

        ball.visible = true;
        paddle.visible = true;

        console.log(gameState);
    }

    if(keyDown("space") && gameState === "serve"){
        ball.velocityX = 9;
        ball.velocityY = 9;
        gameState = "play";
    }

    if(gameState ==="play"){  
        
        ball.bounceOff(upWall);
        ball.bounceOff(leftWall);
        ball.bounceOff(rightWall);
        ball.bounceOff(paddle);

        paddle.bounceOff(leftWall);
        paddle.bounceOff(rightWall);

        if (keyDown("left")) { 
            paddle.velocityX = -13;
        } 
        else if(keyDown("right")){
            paddle.velocityX=13;
        }
        else{
            paddle.velocityX = 0;
        }

        if(ball.collide(downWall)){
            ball.x = displayWidth/2;
            ball.y = (displayHeight-100)-100;
            ball.velocityX = 0;
            ball.velocityY = 0;
            paddle.velocityX = 0;
            paddle.velocityY = 0;
            paddle.x = displayWidth/2;
            paddle.y = (displayHeight-100)-40;
            gameState = "serve";
            lives = lives-1;
            
          }

        brick1();
        brick2();
        brick3();
        brick4();
        brick5();
        brick6();
        brick7();
        brick8();    
        brick9();
        brick10();        
        brick11();    
        brick12();
        brick13();        
        
        

        textSize(25);
        fill("DarkOrange");
        text("Lives:" + lives, displayWidth/2-400,((displayHeight-100)/2)-200);  

        console.log(gameState);
        
    }

    if(lives === 0){
        gameState = "end";
    }

    if(gameState === "end"){

        b1.destroy();
        b2.destroy();
        b3.destroy();
        b4.destroy();
        b5.destroy();
        b6.destroy();
        b7.destroy();
        b8.destroy();
        b9.destroy();
        b10.destroy();
        b11.destroy();
        b12.destroy();
        b13.destroy();

        leftWall.destroy();
        rightWall.destroy();
        upWall.destroy();
        downWall.destroy();

        ball.destroy();
        paddle.destroy();

        over = createSprite(displayWidth/2,((displayHeight-100)/2)-200);
        over.addImage(overIMG);

        textSize(40);
        fill("ForestGreen");
        text("GAME OVER",(displayWidth/2)-50,((displayHeight-100)/2)+40);
        text("Reload the page to try again!",(displayWidth/2)-50,((displayHeight-100)/2)+70);

    }
    drawSprites();   
}

function brick1(){

    if(ball.bounceOff(b1)){
        c1-=1;
    

    }
    if(c1 === 2){
        b1.shapeColor = "FireBrick";
        
    }

    if(c1 === 1){
        b1.shapeColor = "Maroon";
        
    }

    if(c1 === 0){
        b1.destroy();
        point+=30;
    }

}

function brick2(){

    if(ball.bounceOff(b2)){
        c2-=1;
        
    }
    if(c2 === 2){
        b2.shapeColor = "FireBrick";
    }

    if(c2 === 1){
        b2.shapeColor = "Maroon";
    }

    if(c2 === 0){
        b2.destroy();
        point+=30;
    }

}

function brick3(){

    if(ball.bounceOff(b3)){
        c3-=1;
    }
    if(c3 === 2){
        b3.shapeColor = "FireBrick";
    }

    if(c3 === 1){
        b3.shapeColor = "Maroon";
    }

    if(c3 === 0){
        b3.destroy();
        point+=30;
    }

}

function brick4(){

    if(ball.bounceOff(b4)){
        c4-=1;
    }
    if(c4 === 2){
        b4.shapeColor = "FireBrick";
    }

    if(c4 === 1){
        b4.shapeColor = "Maroon";
    }

    if(c4 === 0){
        b4.destroy();
        point+=30;
    }

}

function brick5(){

    if(ball.bounceOff(b5)){
        c5-=1;
    }
    if(c5 === 2){
        b5.shapeColor = "FireBrick";
    }

    if(c5 === 1){
        b5.shapeColor = "Maroon";
    }

    if(c5 === 0){
        b5.destroy();
        point+=30;
    }

}

function brick6(){

    if(ball.bounceOff(b6)){
        c6-=1;
    }
    if(c6 === 2){
        b6.shapeColor = "FireBrick";
    }

    if(c6 === 1){
        b6.shapeColor = "Maroon";
    }

    if(c6 === 0){
        b6.destroy();
        point+=30;
    }

}

function brick7(){

    if(ball.bounceOff(b7)){
        c7-=1;
    }
    if(c7 === 2){
        b7.shapeColor = "FireBrick";
    }

    if(c7 === 1){
        b7.shapeColor = "Maroon";
    }

    if(c7 === 0){
        b7.destroy();
        point+=30;
    }

}

function brick8(){

    if(ball.bounceOff(b8)){
        c8-=1;
    }
    if(c8 === 2){
        b8.shapeColor = "FireBrick";
    }

    if(c8 === 1){
        b8.shapeColor = "Maroon";
    }

    if(c8 === 0){
        b8.destroy();
        point+=30;
    }

}

function brick9(){

    if(ball.bounceOff(b9)){
        c9-=1;
    }
    if(c9 === 1){
        b9.shapeColor = "FireBrick";
    }

    if(c9 === 0){
        b9.destroy();
        point+=20;
        
    }

}

function brick10(){

    if(ball.bounceOff(b10)){
        c10-=1;
    }
    if(c10 === 1){
        b10.shapeColor = "FireBrick";
    }

    if(c10 === 0){
        b10.destroy();
        point+=20;
    }

}

function brick11(){

    if(ball.bounceOff(b11)){
        c11-=1;
    }
    if(c11 === 1){
        b11.shapeColor = "FireBrick";
    }

    if(c11 === 0){
        b11.destroy();
        point+=20;
    }

}

function brick12(){

    if(ball.bounceOff(b12)){
        c12-=1;
    }
    if(c12 === 1){
        b12.shapeColor = "FireBrick";
    }

    if(c12 === 0){
        b12.destroy();
        point+=20;
    }

}

function brick13(){

    if(ball.bounceOff(b13)){
        c13-=1;
    }

    if(c12 === 0){
        b12.destroy();
        point+=10;
        lives+=1;
    }

}


