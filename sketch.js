// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let blackhole;
let star = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  blackhole = new Blackhole(windowWidth/2, windowHeight/2);
}

function draw() {
  background(220);
  blackhole.display();
  for(let stars of star){
    stars.display();
    blackhole.attract(stars);
  }
  
}
function mousePressed(){
  let theStar = new Star(mouseX, mouseY);
  star.push(theStar);
}
class Blackhole{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 50;
    this. outSize = this.size * 1.5;
    this.pullDist = this.outSize * 3;
    this.r = this.pullDist;
    this.angle = 0;
  }
  display(){
    noStroke();
    fill(255, 125, 2);
    circle(this.x , this.y, this.outSize);
    fill(0,0,0);
    circle(this.x, this.y, this.size);
  }
  attract(theObj){
    for(let starDist of theObj){
      if(this !== starDist){
        if(dist(this.x, this.y , starDist.x, starDist.y) < this.pullDist){
          star = this.r * cos(this.angle);
          star = this.r * sin(this.angle);
          point(this.x, this.y);
          this.angle += 0.04;
          this.r -= 2;
        }
      }
    }
  }
}

class Star{
  constructor(x, y){

    this.x = x;
    this.y = y;
    this.size = random(3, 40);
    this.color = (random(255), 0, random(255));
  }
  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
  
}
