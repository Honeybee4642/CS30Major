// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let blackhole;
let star = [];
let colliding = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  blackhole = new Blackhole(windowWidth/2, windowHeight/2);
}

function draw() {
  background("darkBlue");
  blackhole.display();
  mouseIsPressing();
  for(let stars of star){
    stars.display();
    stars.update(blackhole);
    stars.becomeDead(blackhole);
    attract(stars,blackhole);
    if(stars.ko === true){
      star.splice(stars,1);
    }
    // colliding = collideCircleCircle(stars.x, stars.y, stars.size, blackhole.x, blackhole.y, blackhole.size);
    // if(colliding){
    //   stars.transparent = 255;
    //   if(stars.transparent >=255){
    //     star.splice(stars,1);
    //   }
      
    // }
    // console.log(colliding);
    // blackhole.attract(stars);
  }
}
function mouseIsPressing(){
  if(mouseIsPressed){
    let theStar = new Star(mouseX, mouseY, blackhole);
    star.push(theStar);
  }
}
function attract(theObject, theAttract){
  if(theAttract !== theObject){
    theAttract.scalar = dist(theAttract.x, theAttract.y, theObject.x,theObject.y);

    if(dist(theObject.x, theObject.y , theAttract.x, theAttract.y) <= theAttract.pullDist){
      // theAttract.r = dist(theAttract.x, theAttract.y, theObject.x,theObject.y);
      theObject.x = theAttract.r + sin(theAttract.angle) * theAttract.scalar + theAttract.x; 
      theObject.y = theAttract.r + cos(theAttract.angle) * theAttract.scalar + theAttract.y;
      theAttract.angle += theAttract.speed;
      theAttract.scalar -= theAttract.r;
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
    this.pullDist = windowHeight + windowWidth;
    this.r = 0.5;
    this.angle = 0;
    this.scalar = 0.5;
    this.speed = 0.01;

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
  constructor(x, y ,towards){
    super();
    this.x = x;
    this.y = y;
    this.size = random(3, 5);
    this.color = color(random(0,255), 0, random(0,255));
    this.dx = random(1, 7);
    this.dy = random(1, 7);
    this.towards = towards;
    this.ko = false;
  }
  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
  update(attractor){
    if(this.x > attractor){
      this.x -= this.dx;
    }
    else if(this.x < attractor){
      this.x += this.dx;
    }
    else if(this.y > attractor){
      this.y -= this.dy;
    }
    else if(this.y < attractor){
      this.y += this.dy;
    }
    
  }

  becomeDead(att){
    colliding = collideCircleCircle(this.x, this.y, this.size, att.x, att.y, att.size);
    if(colliding){
      this.ko = true;
    }
    else{
      this.ko = false;
    }
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
  // }  }
}