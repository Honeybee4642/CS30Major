// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let theStar =[];
class Blackhole{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.color = color(0);
    this.outColor = color(7, 130, 245);
    this.size = 35;
    this.strokeSize = this.size * 25;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
    this.reach = this.strokeSize * 2.75;
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
        if (dist(, otherObject.x, otherObject.y) <this.reach) {
          Star
        }
      }
    }
  }
}
class Star{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255));
    this.size = random(25);
    this.theCircle = circle(this.x, this.y, this.size);
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
  }
  display(){
    fill(this.color);
    noStroke();
    this.theCircle = true;
  }
  update(){
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);
    if(!Blackhole){
      this.dx = map(dx, 0, 1, -3, 3);
      this.dy = map(dy, 0, 1, -3, 3);
      this.x += this.dx;
      this.y += this.dy;
      this.xTime += this.deltaTime;
      this.yTime += this.deltaTime;
    }
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

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  Blackhole(width/2, height/2);
}

function mousePressed() {
  let theDist = new Star(mouseX, mouseY);
  theStar.push(theDist);
}
