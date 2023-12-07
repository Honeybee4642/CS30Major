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
}
class Blackhole{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 50;
    this. outSize = this.size * 1.5;
    this.pullDist = this.outSize * 3;
  }
  display(){
    noStroke();
    fill(255, 125, 2);
    circle(this.x , this.y, this.outSize);
    fill(0,0,0);
    circle(this.x, this.y, this.size);
  }
}
class Star extends Blackhole{
  constructor(x, y, pullDist){
    super(pullDist);
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
  update(theDist){
    for(let starDist of theDist){
      if(this !== theDist){
        if(dist(this.x, this.y, starDist.x, starDist.y) < this.pullDist)
        
      }
    }
  }
}
