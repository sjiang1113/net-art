var isBlack = false; 
function setup() {
  createCanvas(400, 400);
  noStroke(); 
  fill (0,102);
}

function draw() { 
  if (mouseX < 300) { 
    stroke (255, 192, 203);
     rect( mouseX,mouseY,10,10);
  }
  else;{
    stroke (128,0,128);
  }
  if (mouseIsPressed== true){ 
  ellipse( mouseX,mouseY,40,40);
  } 
} 

