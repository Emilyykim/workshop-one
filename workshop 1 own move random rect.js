let x = 0;
let move = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Check if x is out of bounds and adjust the direction accordingly
  if (x > width) {
    move = -5;
  }
  if (x < 0) {
    move = 5;
  }
  
  // Draw a rectangle that moves horizontally
  rect(x, 50, 100, 50);
  
  // Update the position of the rectangle
  x += move;
}