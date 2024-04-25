// sketch.js
const cubeSize = 50;
const margin = 10;
const angleStep = 0.01;
let angle = 0;

function setup() {
  createCanvas(600, 400, WEBGL);
}

function draw() {
  background(0);
  rotateX(angle);
  rotateY(angle);

  for (let x = -cubeSize - margin; x <= cubeSize + margin; x += cubeSize + margin) {
    for (let y = -cubeSize - margin; y <= cubeSize + margin; y += cubeSize + margin) {
      for (let z = -cubeSize - margin; z <= cubeSize + margin; z += cubeSize + margin) {
        push();
        translate(x, y, z);
        fill(random(255), random(255), random(255));
        box(cubeSize);
        pop();
      }
    }
  }

  angle += angleStep;
}