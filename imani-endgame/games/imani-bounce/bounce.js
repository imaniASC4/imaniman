var x = 0;
var y = 0;
var xspeed=10;
var yspeed = 5;
var z = 250;
var level = 1;
var w = 450;
var score =0;
var codes= ['blue','green','black','orange','red'];
function setup(){
     createCanvas(500,500);
    background(120,13,100);
    textSize(40);
    fill('black');

}
function draw(){
setup();
if(keyIsDown(LEFT_ARROW)){
    z-=10;
}
if(keyIsDown(RIGHT_ARROW)){
    z+=10;
}
    if(x+ 10>=500){
        xspeed = -10;
    }
   else if(x<=0){
        xspeed = 10;
    }
else if(x>=z && x<=z+150){
        if(y==w){
            yspeed= -10;
            if (score>5){
                level++;
                score++;
            }
            score++;
            i
        }
    }
    if(y+10 >=500){
yspeed = 0;
xspeed =0;
text("Game overrrrr",200,250);
    }
    else if(y <=0){
        yspeed = 5;
    }
    else if(y==w-10){
        if(x>=z&&x<=z+150){
        yspeed= -10;
        if(score>5){
            level++;
            
        }
        score++;
    }}
    x+=xspeed;
    y+=yspeed;
    text('score:'+score,100, 200);
    fill(codes[Math.floor(Math.random()*codes.length)]);
    ellipse(x,y,10,10);
    fill(0,100,100);
    rect(z,w,150,10)
}