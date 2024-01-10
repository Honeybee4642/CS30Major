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
  background("darkBlue");
  blackhole.display();
  for(let stars of star){
    stars.display();
    stars.update(blackhole);
    // blackhole.attract(stars);
  }

}
function mousePressed(){
  let theStar = new Star(mouseX, mouseY);
  star.push(theStar);
}
function attract(theObject, theAttract){
  if(theAttract !== theObject){
    if(dist(theObject.x, theObject.y , theAttract.x, theAttract.y) <= this.pullDist){
      theAttract.r = dist(theAttract.x, theAttract.y, theObject.x,theObject.y);
      theAttract.x = theAttract.r + sin(theAttract.angle) * theAttract.scalar; 
      theAttract.y = theAttract.r + cos(theAttract.angle) * theAttract.scalar;
      theAttract.angle -= this.speed;
      theAttract.r += theAttract.angle;
      point(theAttract.x, theAttract.y);
    }
  }
}

class Blackhole{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 50;
    this. outSize = this.size * 1.5;
    this.pullDist = this.outSize * 3;
    this.r = 0;
    this.angle = 0;
    this.scalar = 2;
    this.speed = 0.06;

  }
  display(){
    noStroke();
    fill(255, 125, 2);
    circle(this.x , this.y, this.outSize);
    fill(0,0,0);
    circle(this.x, this.y, this.size);
  }
  // attract(theObj){
  //   if(this !== theObj){
  //     if(dist(theObj.x, theObj.y , this.x, this.y) <= this.pullDist){
  //       this.r = dist(this.x, this.y, theObj.x,theObj.y);
  //       this.x = this.r + sin(this.angle) * this.scalar; 
  //       this.y = this.r + cos(this.angle) * this.scalar;
  //       this.angle -= this.speed;
  //       this. r += this.angle;
  //       point(this.x, this.y);
  //     }
  //   }
  // }
}

class Star extends Blackhole{
  constructor(x, y){
    super();
    this.x = x;
    this.y = y;
    this.size = random(3, 40);
    this.color = color(random(0,255), 0, random(0,255));
    this.dx = random(-7, 7);
    this.dy = random(-7, 7);
  }
  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
  update(attractor){
    if(dist(this.x, this.y, attractor.x, attractor.y) >= this.pullDist){
      this.x += this.dx;
      this.y += this.dy;
    }
    // else{
    //   if(this !== attractor){
    //     if(dist(attractor.x, attractor.y , this.x, this.y) <= this.pullDist){
    //       this.r = dist(this.x, this.y, attractor.x,attractor.y);
    //       this.x = this.r + sin(this.angle) * this.scalar; 
    //       this.y = this.r + cos(this.angle) * this.scalar;
    //       this.angle -= this.speed;
    //       this. r += this.angle;
    //       point(attractor.x, attractor.y);
    //     }
    //   }
    // }
  }
}