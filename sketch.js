// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let theStar = [];
let blackhole;
class Blackhole{
  constructor(x, y, sizeMulti, reachMulti){
    this.x = x;
    this.y = y;
    this.color = color(0,0,0);
    this.outColor = color(7, 130, 245);
    this.size = 35;
    this.sizeMulti = sizeMulti;
    this.reachMulti = reachMulti;
    this.outSize = this.size * sizeMulti;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
    this.reach = this.outSize * reachMulti;
  }
  display(){
    noStroke();
    fill(this.outColor);
    circle(this.x, this.y, this.outSize);
    fill(this.color);   
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
class Star extends Blackhole{
  constructor(x, y, deltaTime, reach, xTime, yTime){
    super(xTime, yTime, reach, x, y);
    this.x1 = x;
    this.y1 = y;
    this.color = color(random(255), random(255), random(255));
    this.size = random(25);
    this.theCircle = circle(this.x, this.y, this.size);
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
  pullIn(object){
    for (let otherObject of object) {
      if (this !== otherObject) {
        if (dist(object.x, object.y, otherObject.x, otherObject.y) < this.reach) {
          let num1 = 50;
          let speed = 0.1;
          let angle = 0;
          let scalar = 10;
          let orbitCenterX = this.x;
          let orbitCenterY = this.y;
          let x = cos(angle) * scalar + orbitCenterX;
          let y = sin(angle) * scalar + orbitCenterY;
          ellipse(x, y, num1, num1);
          angle += speed;
        }
      }
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  blackhole = new Blackhole(width/2, height/2, 1.5, 2);
}

function draw() {
  background(220);
  new Blackhole(width/2, height/2);
  blackhole.display();
  blackhole.update(); 
  for(let stars of theStar){
    stars.display();
    stars.updateNormal();
    stars.pullIn();
  } 
}

function mousePressed() {
  let theObject = new Star(mouseX, mouseY, 0.1);
  theStar.push(theObject);
}
// function pullObjIn(){
//   let obj = Star();
//   for(let otherObj of obj){
//     if
//   }
// }
