let x = 0;
let y = 300;
let size = 100;
let speed = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  noStroke();
}

function draw() {
  background(0);
  drawMoon();
  spaceShip(x, y, size);
  if (x > width + 100) {
    x = -50;
    y = random(0, height / 1.5);
  }
  x = x + speed;
}
function drawMoon() {
  fill(80);
  ellipse(width / 2, height / 2, width / 2);
  fill(0, 30);
  ellipse(width / 2 + width / 4, height / 2 - height / 4, width / 2);
  fill(0, 30);
  ellipse(width / 2 - width / 4, height / 2 + height / 10, width / 6);
  fill(0, 30);
  ellipse(width / 2, height / 2 + width / 3, width / 3);
}
function spaceShip(x, y, size) {
  fill(255);
  fill(255, 0, 0);
  triangle(
    x + 25,
    y - size / 4,
    x + size,
    y + size / 4,
    x + 25,
    y + (size * 3) / 4
  );
  fill(224, 56, 10);
  rect(x - 25, y + 2, size, size / 2.12, 40);
  fill(53, 109, 194);
  rect(x, y, size, size / 2, 5);
  ellipse(x + size, y + size / 4, size, size / 2);
  fill(244, 116, 35);
  ellipse(x + size / 3, y + size / 4, size / 4);
  ellipse(x + (size * 2) / 3, y + size / 4, size / 4);
  ellipse(x + size, y + size / 4, size / 4);
}
