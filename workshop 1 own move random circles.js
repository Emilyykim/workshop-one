let circles = [];

function setup() {
  createCanvas(600, 400);
  // Create 6 circles of different colors
  for (let i = 0; i < 6; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      speed: random(1, 3),
      color: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  background(220);
  // Move each circle from left to right
  circles.forEach(circle => {
    fill(circle.color);
    circle.x += circle.speed;
    if (circle.x > width) circle.x = 0;
    ellipse(circle.x, circle.y, 50, 50);
  });
}