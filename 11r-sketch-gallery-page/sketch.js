let winter = [];
let summer = [];
let totalNum = 5; 

let seasonal = [];
let totalseasonal = 1;
let ypoint =0;
let stars =[];

function setup() {
  let canvas = createCanvas(600, 600);
  for (var i = 0; i < 1000; i++) {
		stars[i] = new Star();
	}
  canvas.parent("nightnatureflower");
  background(220);
}

function draw() {
  background(0);
  for (let i = 0; i < winter.length; i++) {
    winter[i].display();
    winter[i].move();
    winter[i].changeColor();
    winter[i].bounce();
    // winter[i].slowDown();
    //winter[i].speedUp();


  }
  
    
   for (let i = 0; i < summer.length; i++) {

    summer[i].display();
    summer[i].move();
    summer[i].enlarge();
    summer[i].adjustScale(0.01);
    summer[i].bounce();
    summer[i].shrink();
    // summer[i].slowDown();    
    //summer[i].speedUp();


    
  }
  
      for (let i = 0; i < seasonal.length; i++) {
      
    seasonal[i].display();
    seasonal[i].move();
    }
  for (var i = 0; i < stars.length; i++) {
		stars[i].display();
	}
  
  if (winter.length > 200) {
      let index = 0;
      winter.splice(index, 1);
    if (summer.length > 200) {
      let index = 0;
      summer.splice(index, 1);
    }
    
}
  fill(255);
  textFont('San Serif');
  textSize(33);
  text("Night Nature Flower",170,70);


  fill(255);
  textSize(12.5);
  text("Mouse clicked to start",400,550);
  text("Double clicked to add more color",400,560);
  text("Pressed 'A' to add flowers",400,570);
  text("Pressed 'D' to delete flowers",400,580);
  text("Pressed 'Spacebar' to clear canvas",400,590);
}



    
  function mousePressed() {
  if (seasonal.length<5){
    seasonal.push(new Butterfly(mouseX,mouseY));
  }
  // winter.push(new Snowflakeflower(mouseX,mouseY);
  // summer.push(new Summerflower(random(width),random(height)));

//}

// function doubleClicked(){
//    if (seasonal.length<3){
//     seasonal.push(new Butterfly(random(width),random(height)));
//   }

  // function touchMoved(){
  //   if (butterfly.length<5){
  //   butterfly.push(new Butterfly(mouseX,mouseY));
  // }
  // }
}

function keyPressed() {
  if (key == " ") {
    clear();
  }
if (key == "d" || key == "D") {
  if (winter.length > 0) {
      let index = 0;
      winter.splice(index, 1);
    }
  if (summer.length > 0) {
      let index = 0;
      summer.splice(index, 1);
  }
  
  }
  
  if (key == "a" || key == "A") {
    winter.push(new Snowflakeflower(random(width), random(height)));
  summer.push(new Summerflower(random(width), random(height)));
    
  }
  if (key == " ") {
    // clear();
    winter = []
    summer = []
    seasonal = []
  }
  
//   if (key == "m" || key == "M") {
// summer.push(new Summerflower(mouseX,mouseY));
            

//             }
}

    

class Snowflakeflower {
   constructor(x,y) {
    this.x = x;
    this.y = y;
    //this.x = width/4;
    //this.y = (height/4)*3;
    this.xSpd = random(-1, 1);
    this.ySpd = random(-1, 1);
    this.changecolor=color(random(255),random(255),random(255));
    this.angle = random(PI/2);
    this.angleV = random(0.01,0.1);
    this.isShrink = false;
    
  }

  
  
//   slowDown() {
//     this.xSpd = this.xSpd * 0.05;
//     this.ySpd = this.ySpd * 0.05;
//     console.log("slowDown")
//   }
  
  
//   speedUp() {
//     this.xSpd = this.xSpd * 1.05;
//     this.ySpd = this.ySpd * 1.05; 
//         console.log("speedup")

//   }

  changeColor() {
    if (this.x < 0 || this.x > width) {
      fill(random(255), random(255), random(255));
    }
  }

    

  // methods
  move(){
  this.x += this.xSpd;
  this.y += this.ySpd;
  }
  
    
  display() {
    push();
    translate(this.x, this.y);
    this.angle += this.angleV;
    rotate(this.angle);
    scale(0.45);
    
  //inside flower up
    push();
    translate(103,95);
    rotate(150.07);
    noStroke();
    fill(this.changecolor);
    quad(38, 31, 79, 20, 69, 63, 30, 76);
    pop();
    
  //inside flower right
    push();
    translate(240,190);
    rotate(72.77);
    noStroke();
    fill(this.changecolor);
    quad(38, 31, 79, 20, 69, 63, 30, 76);
    pop();
    
  //inside flower left
    push();
    translate(110,190);
    rotate(60.9);
    noStroke();
    fill(this.changecolor);
    quad(38, 31, 79, 20, 69, 63, 30, 76);
    pop();
    
  //inside flower leftdown
    push();
    translate(93,130);
    rotate(43.85);
    noStroke();
    fill(this.changecolor);
    quad(38, 31, 79, 20, 69, 63, 30, 76);
    pop();
    
    //inside flower rightdown
    push();
    translate(148,215);
    rotate(48.85);
    noStroke();
    fill(this.changecolor);
    quad(38, 31, 79, 20, 69, 63, 30, 76);
    pop();
    
    
    pop();    
  }  

  
  bounce() {
    if (this.x < 0) {
      this.x = 0;
      this.xSpd = this.xSpd * -0.05;
    }
    else if (this.x > width) {
      this.x = width;
      this.xSpd = this.xSpd * -0.05;
    }
    if (this.y < 0) {
      this.y = 0;
      this.ySpd = this.ySpd * 1;
    }
    else if (this.y > height) {
      this.y = height;
      this.ySpd = this.ySpd * 1;
    }
  }
  }
  
class Summerflower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.sizeY = 30;
    this.sizebigx = 45;
    this.sizebigy = 80;
    this.smallcirclesize = 10;
    this.xSpd = random(-1, 1);
    this.ySpd = random(1, 1);
    this.angle = random(TWO_PI);
    this.angleVel = random(0.05, 0.02);
    this.isDone = false;
    this.isShrink = false;
    this.changecolor = color(random(255), random(255), random(255));
    this.changecolorbig = color(random(100), random(255), random(255));
    this.freq = frameCount * 0.005;
    this.amp = 100;
    this.scl = 1.0;
  }
    slowDown() {
    this.xSpd = this.xSpd * 0.5;
    this.ySpd = this.ySpd * 0.5;
  }
   
  speedUp() {
    this.xSpd = this.xSpd * 1.05;
    this.ySpd = this.ySpd * 1.05; 
  }

  enlarge() {
    // console.log(this.sizebigy)
    if (this.isShrink == false){
      this.size += 0.8;
    this.sizebigy += 0.8;
    this.size = constrain(this.size, 10, 80);
    this.sizebigy = constrain(this.sizebigy, 10, 150);
    }
    
  }

  adjustScale(value) {
    if (this.x > 0) {
      this.scl += value;
      this.scl = constrain(this.scl, 0.1, 1.5);
    } else if (this.scl < 0) {
      this.scl -= value;
      this.scl = constrain(this.scl, 1.5, 0.1);
    }
    if (this.y > 0) {
      this.scl += value;
      this.scl = constrain(this.scl, 0.1, 1.5);
    } else if (this.y < 0) {
      this.scl -= value;
      this.scl = constrain(this.scl, 1.5, 0.01);
    }
  }

  shrink() {
    if (this.sizebigy >= 150 ) {
      this.isShrink = true;
    }
    if (this.sizebigy <= 80){
      this.isShrink = false;
    }

    if (this.isShrink == true) {
      // console.log("is shrinking!")
      this.sizebigy = this.sizebigy - 1;
    }

        if (this.isShrink == true) {
      // console.log("is shrinking!")
      this.size = this.size - 1;
    }


  }

  // methods
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
    this.angle += this.angleVel;
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.scl);
    this.angle += this.angleVel;
    rotate(this.angle);
    scale(0.35);

    //circle
    
    //up
    push();
    translate(6, -25);
    // this.cosValue = cos(this.freq) * this.amp;
    // this.tanValue = tan(this.freq) * this.amp;
    // rotate();
    noStroke();
    fill(this.changecolorbig);
    ellipse(0, 35, this.sizebigx, this.sizebigy);
    fill(this.changecolor);
    ellipse(0, 35, this.sizeY, this.size);
    pop();
    
    //rightup
    push();
    translate(30, 30);
    rotate(73.3, 30);
    noStroke();
    fill(this.changecolorbig);
    ellipse(-20, 15, this.sizebigx, this.sizebigy);
    fill(this.changecolor);
    ellipse(-20, 15, this.sizeY, this.size); //downleft
    pop();
    
    //uprightadd
    push();
    translate(10,55);
    // this.cosValue = cos(this.freq) * this.amp;
    // this.tanValue = tan(this.freq) * this.amp;
    rotate(123, 123);
    noStroke();
    fill(this.changecolorbig);
    ellipse(0, 35, this.sizebigx, this.sizebigy);
    fill(this.changecolor);
    ellipse(0, 35, this.sizeY, this.size);
    pop();

    //upleft
    push();
    translate(-30, 90);
    rotate(91.5, 12);
    //scale(this.scl);
    noStroke();
    fill(this.changecolorbig);
    ellipse(25, 50, this.sizebigy, this.sizebigx);
    fill(this.changecolor);
    ellipse(25, 50, this.size, this.sizeY); //upright
    pop();

    //upleftadd
    push();
    translate(5, -20);
    rotate(95.3, 12);
    //scale(this.scl);
    noStroke();
    fill(this.changecolorbig);
    ellipse(25, 50, this.sizebigy, this.sizebigx);
    fill(this.changecolor);
    ellipse(25, 50, this.size, this.sizeY); //upright
    pop();
    
    //rightmiddle
    push();
    translate(33, 3);
    rotate();
    //scale(this.scl);
    noStroke();
    fill(this.changecolorbig);
    ellipse(25, 50, this.sizebigy, this.sizebigx);
    fill(this.changecolor);
    ellipse(25, 50, this.size, this.sizeY); //upright
    pop();
    
    //leftmiddle
    push();
    translate(-130, 50);
    rotate(80,100);
    noStroke();
    fill(this.changecolorbig);
    ellipse(-20, 95, this.sizebigx, this.sizebigy);
    fill(this.changecolor);
    ellipse(-20, 95, this.sizeY, this.size); //downleft
    pop();

    //downright
    push();
    translate(0, 150);
    //scale(this.scl);
    rotate(73, 30);
    noStroke();
    fill(this.changecolorbig);
    ellipse(25, 75, this.sizebigy, this.sizebigx);
    fill(this.changecolor);
    ellipse(25, 75, this.size, this.sizeY);
    pop();

    //down
    push();
    translate(2, -5);
    rotate();
    //scale(this.scl);
    noStroke();
    fill(this.changecolorbig);
    ellipse(3, 103, this.sizebigx, this.sizebigy);
    fill(this.changecolor);
    ellipse(3, 103, this.sizeY, this.size); //down
    pop();

    //downleft
    push();
    translate(-90, 120);
    rotate(73, 30);
    noStroke();
    fill(this.changecolorbig);
    ellipse(-20, 75, this.sizebigx, this.sizebigy);
    fill(this.changecolor);
    ellipse(-20, 75, this.sizeY, this.size);
    pop();

    pop();
  }
    bounce() {
    if (this.x < 0) {
      this.x = 0;
      this.xSpd = this.xSpd * -0.5;
    } else if (this.x > width*2) {
      this.x = width;
      this.xSpd = this.xSpd * -0.5;
    }
    if (this.y < 0) {
      this.y = 0;
      this.ySpd = this.ySpd * -1;
    } else if (this.y > height) {
      this.y = height;
      this.ySpd = this.ySpd * -1;
    }
  }
}
class Butterfly {
  constructor(x,y) {

    this.x = x;
    this.y = y;
    this.xSpd = random(-1, 1); 
    this.ySpd = random(-1, 1); 
    this.size = PI/150;
    this.dx = 0.07;
    this.xpoint = 0;
  }

  
  // methods
  move(){
  this.x += this.xSpd;
  this.y += this.ySpd;
  this.ypoint += 0.001;
  }
  
    
  display() {
    push();
    translate(width/2,height/2);
    // this.angle += this.angleV;
    // rotate(this.angle);
    fill(random(255),random(255),random(255));
    scale(0.5);
	beginShape();
	for (let a = 0; a <= TWO_PI; a += this.size) {
		let n = noise(this.xpoint, ypoint);
		let r = cos(8 * a) * map(n, 0, 1, 50, 350);
		let x = r * cos(a);
		let y = r * sin(a);
		if (a < PI) {
			this.xpoint += this.dx;
		} else {
			this.xpoint -= this.dx;
		}
		//point(x, y);
		vertex(x, y);
	}
	endShape();
    pop();
  }
}

class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.25, 1);
		this.angle = random(TAU);
	

}

	display() {
		this.angle += 0.1;
		let scale = this.size + sin(this.angle) * 2;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
    }
}
