function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(215, 240,240);
   for (var s=60; s< width; s+=50){ 
    for (var q= 65; q< height; q+=15){ 
      fill (255,100,0 )
      ellipse (s,q, 20,20); 
for(var x=50; x <= width-50; x+=40){
      for (var y=70; y<= height-50; y+=70){ 
         for( var x=50; x<= width-50; x+=50){
         for (var y=70; y<= height-50; y+=70){
          fill(125,25,55); 
         ellipse (x,100, 100); 
         }
         } 
      } 
}  
    }
  }
} 