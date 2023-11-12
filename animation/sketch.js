var x1=10, x2=30, x3=50, x4=70, x5=90, x6=110, x7=130, x8=150, x9=170, x10=180, x11=210, x12=220, x13=250, x14=270, x15=280, x16=300, x17=330, x18=350, x19=370,x20=390;  
var y=0, y1=20, y2=50, y3=30,y4=40; 
var canvas; 
function setup() {
  canvas=createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
}
function windowResize(){ 
  resizeCanvas(windowWidth,windowHeight); 
}

function draw() {
  background(220);
  fill(229,184,134);
  rect(250,300,100,100);
  
  fill(142,133,201);
  triangle(250,300,350,300,300,250);
  
  fill(0,0,0);
  rect(275,350,30,60);
  
  y+=3;
  y4+=2; 
  y3+=2.5; 
  fill(0); 
  textSize(20);
  text(' ', 200, 200); 
  fill (167,199,231);
  ellipse( x1, y, 10,10);
  ellipse( x2, y, 10,10);
  ellipse( x3, y, 10, 10);
  ellipse( x4, y, 10, 10);
  ellipse( x5, y, 20, 20);
  ellipse( x6, y, 5, 5);
  ellipse( x7, y, 10, 10);
  ellipse( x8, y, 10, 10);
  ellipse( x9, y, 10, 10);
  ellipse( x10, y, 30, 30);
  ellipse( x11, y, 10, 10);
  ellipse( x12, y, 10, 10);
  ellipse( x13, y, 20, 20);
  ellipse( x14, y, 10, 10);
  ellipse( x15, y, 10, 10);
  ellipse( x16, y, 10, 10);
  ellipse( x17, y, 20, 20);
  ellipse( x18, y, 10, 10);
  ellipse( x19, y, 10, 10);
  ellipse( x1, y3, 20, 20);
  ellipse( x2, y3, 10, 10);
  ellipse( x3, y3, 30, 30);
  ellipse( x4, y3, 10, 10);
  ellipse( x6, y3, 20, 20);
  ellipse( x8, y3, 10, 10);
  ellipse( x10, y3, 20, 20);
  ellipse( x12, y3, 20, 20);
  ellipse( x14, y3, 30, 30);
  ellipse( x16, y3, 20, 20);
  ellipse( x18, y3, 40, 40);
  ellipse( x2, y4, 20, 20);
  ellipse( x3, y4, 10, 10);
  ellipse( x5, y4, 30, 30);
  ellipse( x4, y4, 10, 10);
  ellipse( x1, y4, 20, 20);
  ellipse( x6, y4, 20, 20);
  ellipse( x8, y4, 10, 10);
  ellipse( x10, y4, 20, 20);
  ellipse( x12, y4, 20, 20);
  ellipse( x7, y4, 30, 30);
  ellipse( x16, y4, 20, 20);
  ellipse( x18, y4, 40, 40);
  ellipse( x11, y4, 20, 20);
  ellipse( x14, y4, 10, 10);
  ellipse( x10, y4, 20, 20);
  ellipse( x13, y4, 20, 20);
  ellipse( x17, y4, 30, 30);
  
  fill (115,147,179);
  ellipse(x1,y1,50,50);
  ellipse(x3,y1, 80,105);
  ellipse(x5,y1, 90,75);
  ellipse(x7,y1, 75,55);
  ellipse(x9,y1, 80,95);
  ellipse(x11,y1, 75,75);
  ellipse(x13,y1, 75,75);
  ellipse(x15,y1, 80,90);
  ellipse(x17,y1, 120,100);
  ellipse(x4,y2, 55,95);
  ellipse(x6,y2, 75,85);
  ellipse(x8,y2, 65,75);
  ellipse(x10,y2, 75,95);
  ellipse(x12,y2, 75,80);
  ellipse(x14,y2, 75,75);
  ellipse(x16,y2, 75,90);
  ellipse(x18,y2, 100,75);
  ellipse(x1,y2,100,75);
}

