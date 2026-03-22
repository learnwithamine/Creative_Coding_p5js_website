function setup(){
  createCanvas(400,400);
  background(255);
  stroke(0);
  noLoop();
}
function draw(){
  let x=0;
  let spacing=20;
  while (x<width){
    let y=0;
    while (y<height){
      
      if (random()<0.5){
        line(x,y,x+spacing,y+spacing);
      }
      else {
        line(x+spacing,y,x,y+spacing);
      }
    y+=spacing
      
    }
    x+=spacing;
  }
}
