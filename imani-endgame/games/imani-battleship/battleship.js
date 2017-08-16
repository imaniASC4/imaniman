
function randisit(){
    var z = Math.floor(Math.random()*2);
    if (z==0){
        return false;
    }
    else if (z==1){
        return true;
    }
}
var colors = ['red','white','blue'];
var xpos=100;
var ypos = 100;
var boxes=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0]];
var u=0;
var h=0;
var choice = 'blue';
function setup(){
    createCanvas(800,800);
    background(150,20,145);
    for(var s = 0; s<boxes.length;s++){
    if(xpos>700){
        ypos+=100;
        xpos=100;
        boxes[s][2]= randisit();
        boxes[s][1]=ypos;
        boxes[s][0]=xpos;
        fill (colors[2]);
        rect(xpos,ypos,100,100);
        xpos +=100;
        

    }
    else {
        
        fill(colors[2]);
        rect(xpos,ypos,100,100);
        boxes[s][2]= randisit();
        boxes[s][1]=ypos;
        boxes[s][0]=xpos;
        
        xpos+=100;
    }

}
}
var ret = 0;
function draw(){}
function mousePressed(){
    xpos=100;
    ypos=100;
  for(var i=0;i<boxes.length;i++){
      if(mouseX>=boxes[i][0]&&mouseX<=boxes[i][0]+100){
          if(mouseY>=boxes[i][1]&&mouseY<=boxes[i][1]+100){
          xpos = boxes[i][0];
          ypos = boxes[i][1];
          if(boxes[i][2]==true){
              choice = 'red';
          }
          else{choice='white';}
      }}
  }



   fill(choice);
rect(xpos,ypos,100,100);
xpos+=100;
ypos+=100;
ret++;
}

