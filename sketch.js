// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let theStar =[];
let blackhole;
let star;
class Blackhole{
  constructor(x, y, strokeMulti, reachMulti){
    this.x = x;
    this.y = y;
    this.color = color(0);
    this.outColor = color(7, 130, 245);
    this.size = 35;
    this.strokeMulti = strokeMulti;
    this.reachMulti = reachMulti;
    this.strokeSize = this.size * strokeMulti;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
    this.reach = this.strokeSize * reachMulti;
  }
  display(){
    fill(this.color);
    stroke(this.outColor);
    strokeWeight(this.strokeSize);
    circle(this.x, this.y, this.size);
    rotate(10);
  }
  update(){
    let dx = noise(this.xTime);
    this.dx = map(dx, 0, 1, -3, 3);
    let dy = noise(this.yTime);
    this.dy = map(dy, 0, 1, -3, 3);
    this.x += this.dx;
    this.y += this.dy;
    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;
    if (this.x < 0) {
      this.x += width;
    }
    if (this.x > width) {
      this.x -= width;
    }
    if (this.y < 0) {
      this.y += height;
    }
    if (this.y > height) {
      this.y -= height;
    }
  }
  
}
class Star{
  constructor(x, y, deltaTime){
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255));
    this.size = random(25);
    this.theCircle = circle(this.x, this.y, this.size);
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = deltaTime;
    this.speed = random(2.5, 5);
  }
  display(){
    fill(this.color);
    noStroke();
    this.theCircle;
  }
  updateNormal(){
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);
    this.dx = map(dx, 0, 1, -3, 3);
    this.dy = map(dy, 0, 1, -3, 3);
    this.x += this.dx;
    this.y += this.dy;
    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;
    if (this.x < 0) {
      this.x += width;
    }
    if (this.x > width) {
      this.x -= width;
    }
    if (this.y < 0) {
      this.y += height;
    }
    if (this.y > height) {
      this.y -= height;
    }
  }
  updatePull(){
    let num1 = 50;
    let speed = 0.1;
    let angle = 0;
    let scalar = 10;
    let orbitCenterX = blackhole.x;
    let orbitCenterY = blackhole.y;
    let x = cos(angle) * scalar + orbitCenterX;
    let y = sin(angle) * scalar + orbitCenterY;
    ellipse(x, y, num1, num1);
  
    angle += speed;
  }
  pullIn(object){
    for (let otherObject of object) {
      if (this !== otherObject) {
        if (dist(object.x, object.y, otherObject.x, otherObject.y) < blackhole.reachMulti) {
          this.updatePull();
        }
      }
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  blackhole = new Blackhole(width/2, height/2, 1.5, 2);
  star = new Star(this.x, this.y, 0.01);
}

function draw() {
  background(220);
  new Blackhole(width/2, height/2);
  for(let stars of theStar){
    if 
  } 
}

function mousePressed() {
  let theDist = new Star(mouseX, mouseY);
  theStar.push(theDist);
}
// function pullObjIn(){
//   let obj = Star();
//   for(let otherObj of obj){
//     if
//   }
// }
