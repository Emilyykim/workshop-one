function setup() {
  createCanvas(550, 450);
}

function draw() {
  background(220);
  
 
  makeHouse(50,200,30, color(255,0,255));
 makeHouse(150,200,150,color(0,0,0));

}
function makeHouse(xPos,yPos,stories,colour) {
  fill(colour);
  noStroke()
  rect(xPos, yPos,50,stories);
  triangle(xPos,yPos,xPos + 25,yPos - 20, xPos + 50, yPos);


 
  
}