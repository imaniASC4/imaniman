function setup(){
    createCanvas(1000,1000);
    background(150,60,40);
    fill('green');
    rect(50,50,150,150);
    fill('red');
    rect (300,50,150,150);
    fill(0,10,98);
    rect(550,50,150,150);
    var color = 'black';
}
function draw(){
if (mouseIsPressed){
    if(mouseY>=50 && mouseY<=200){
    if(mouseX>=50 && mouseX<=200 ){
        color = 'green';
    }
    else if(mouseX>=300&&mouseX<=450){
        color = 'red';
    }
else if(mouseX>=550&&mouseX<=700){
    color= [0,10,98];
}
}

}print(mouseIsPressed);
}

 
  var sizes = [100,50,20,10, 200, 40, 5];

function mouseDragged() {
    var choices =[0,1,2];
    fill(color);
var choice = choices[Math.floor(Math.random()*choices.length)];
if (choice === 0){
 ellipse(mouseX,mouseY,sizes[Math.floor(Math.random()*sizes.length)],sizes[Math.floor(Math.random()*sizes.length)]);
}
if (choice === 1){
    ellipse(mouseX,mouseY,10,40);
}
if(choice===2){
  rect(mouseX,mouseY,10,10)
}
  return false;
}
