// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let theStar =[];
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
  pullIn(object){
    for (let otherObject of object) {
      if (this !== otherObject) {
        if (dist(object.x, object.y, otherObject.x, otherObject.y) < this.reach) {
          
        }
      }
    }
  }
}
class Star{
  constructor(x, y, xTime, yTime){
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255));
    this.size = random(25);
    this.theCircle = circle(this.x, this.y, this.size);
    this.xTime = xTime;
    this.yTime = yTime;
    this.deltaTime = 0.01;
  }
  display(){
    fill(this.color);
    noStroke();
    this.theCircle = true;
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
    let num2 = 100;
    let  = this.xTime;
    let dy = this.yTime;
    let angle = 0;
    let orbitCenterX = Blackhole(this.x, this.y);
    let orbitCenterY = Blackhole(this.x, this.y);
    let orbitArea = Blackhole(this.x, this.y ,this.strokeMulti, this.reachMulti);
    let x = orbitCenterX + orbitArea * cos(angle);
    let y = orbitCenterY + orbitArea * sin(angle);
    ellipse(orbitCenterX, orbitCenterY, num1, num1);
    ellipse(x, y, num2, num2);
    angle += 
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  new Blackhole(width/2, height/2);
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
