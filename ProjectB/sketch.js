// let Daisy = [];
// let totalNum = 1;

// let Sunflower = [];
// let totalSunflower = 1;
// let img;

// let Aster = [];
// let totalAster = 1;
// let ypoint = 0;

// let Orbit =[];
// let totalOrbit = 1;
// let offset = 0;

// let stars =[];


// let flower = ["Daisy", "Sunflower", "Aster"];
// let visual = ["Daisy", "Sunflower", "Aster"];

// let flowerquotation = ["Love", " Happiness","Wisdom"];
// let flowernameisplaying = true;
// let flowerquotationisplaying = true;
// let flowervisualisplaying = true;

// let randomNum;
// let index;


// function setup() {
//   let canvas = createCanvas(600, 700);
//   canvas.parent("floralfortune");
//   background(220);

//   textSize(15);
//   textAlign(CENTER);
//   fill(255,255,255);
//   textFont('San Serif');
  
//   for (let i = 0; i < totalOrbit; i++) {
//     Orbit[i] =  new orbit(width/2, height/2);
//   }
  
  
//   for (var i = 0; i < 1000; i++) {
// 		stars[i] = new Star();
// 	}
  
//   for (let i = 0; i < totalNum; i++) {
//     Daisy[i] = new daisy(width - random(100), +random(-100, 100));
//   }

//   for (let i = 0; i < totalSunflower; i++) {
//     Sunflower[i] = new sunflower(width - random(100), +random(-100, 100));
//   }

//   for (let i = 0; i < totalAster; i++) {
//     Aster[i] = new aster();
//   }
// }
// function setLineDash(list) {
//   drawingContext.setLineDash(list);
//   drawingContext.lineDashOffset = -offset;
// }

// function march() {
//   offset++;
//   if (offset > 500) {
//     offset = 0;
//   }
// }
// function preload() {
//   img = loadImage("removesun.png");
// }

// function mouseClicked() {
//   if (flowernameisplaying == true) {
//     flowernameisplaying = false;
//     randomNum = int(random(0, 3));
//   } else if (flowernameisplaying == false) {
//     flowernameisplaying = true;
//   }

//   if (flowerquotationisplaying == true) {
//     flowerquotationisplaying = false;
//     randomNum = int(random(0, 4));
//   } else if (flowerquotationisplaying == false) {
//     flowerquotationisplaying = true;
//   }
//   if (flowervisualisplaying == true) {
//     flowervisualisplaying = false;
//     randomNum = int(random(0, 4));
//   } else if (flowervisualisplaying == false) {
//     flowervisualisplaying = true;
//   }
// }

// function draw() {
//   background(0);
//   for (let i = 0; i < Daisy.length; i++) {
//     // Daisy[i].display();
//     Daisy[i].move();
//     Daisy[i].enlarge();
//     Daisy[i].adjustScale(0.01);
//     Daisy[i].shrink();
//   }

//   for (let i = 0; i < Sunflower.length; i++) {
//     // Sunflower[i].display();
//     Sunflower[i].move();
//   }

//   for (let i = 0; i < Aster.length; i++) {
//     // Aster[i].display();
//     Aster[i].move();
//   }
  
//   for (let i = 0; i < Orbit.length; i++) {
//     Orbit[i].move();
//     Orbit[i].display();
//   }

  
//   if (flowernameisplaying) {
//     if (frameCount % 5 == 0) {
//       index = round(random(flower.length));
//     }
//     text(flower[index], 300, 60);
//     if (index == 0) {
//       Daisy[0].display();
//     } else if (index == 1) {
//       Sunflower[0].display();
//     } else if (index == 2) {
//       Aster[0].display();
//     }
//   } else {
//     // flower.stop();

//     text(flower[randomNum], 300, 65);

//     if (flower[randomNum] == "Daisy") {
//       Daisy[0].display();
//     } else if (flower[randomNum] == "Sunflower") {
//       Sunflower[0].display();
//     } else if (flower[randomNum] == "Aster") {
//       Aster[0].display();
//     }
//   }

//   if (flowerquotationisplaying) {
//     push();
//     text(flowerquotation[index], 300, 660);
//     pop();
//   }
//   if (flowerquotationisplaying == false) {
//     // flower.stop();

//     push();
//     text(flowerquotation[randomNum], 300, 660);
//     pop();

//     // console.log(flower[randomNum])
//   }
//   for (var i = 0; i < stars.length; i++) {
// 		stars[i].display();
// 	}

// }
// class orbit{
//   constructor(x,y) {
//   this.x = x;
//   this.y = y;
//   this.angle = 0;
//   this.angleVel =2;
//   // this.orbitcolor = (153,153,153);
//   //this.angle = PI*2.1;

//     }
  
//   move(){
//   this.x += this.xSpd;
//   this.y += this.ySpd;
//   this.angle += this.angleVel
//   }

//   display() {
//   push();
//   stroke(250,239,204);
//   noFill();
    
//   // push();
//   // translate(width/2,height/2);
//   // rotate(radians(this.angle));
//   // Sunflower[0].display();
//   // scale(0.005);
//   // pop()
    
// //1circlehorizon
//   push();
//   // translate();
//   strokeWeight(0.3);
//   ellipse(300,350,590,500); 
//   pop();
    
// //2circleverticle
//   push();
//   translate();
//   strokeWeight(0.5);
//   ellipse(300,350,430,690); 
//   pop();
    
// //3dashcircle
//   push();
//   translate();
//   // rotate(this.angle);
//   strokeWeight(1.8);
//   setLineDash([15,5,30]); 
//   setTimeout(march, 100);
//   ellipse(300, 350, 500, 500);
//   pop();
    
// //5fullcircle
//   push();
//   translate();
//   strokeWeight(0.6);
//   ellipse(300,350,490,490); 
//   pop();
  
// //6dotcircle
//   push();
//   translate();
//   strokeWeight(1.2);
//   setLineDash([3,3]); 
//   setTimeout(march, 10);
//   ellipse(300,350,486,486); 
//   pop();
    
// //7fullcircle
//   push();
//   translate();
//   strokeWeight(1.78);
//   ellipse(300,350,430,430); 
//   pop();
    
// //8fullcircle
//   push();
//   translate();
//   strokeWeight(0.9);
//   ellipse(300,350,370,370); 
//   pop();
    
// //9dotcircle
//   push();
//   translate();
//   strokeWeight(0.3);
//   setLineDash([3,3]); 
//   setTimeout(march, 10);
//   ellipse(300,350,350,350); 
//   pop();
    
// //10upinnercircle
//   push();
//   translate();
//   strokeWeight(0.7);
//   setLineDash([3,3]);
//   setTimeout(march, 10);
//   ellipse(300,-5,205,205); 
//   pop();
    
// //11upmiddlecircle
//   push();
//   translate();
//   strokeWeight(1.8);
//   // setLineDash([3,3]); 
//   ellipse(300,-10,220,220); 
//   pop();
    
// //12upoutercircle
//   push();
//   translate();
//   strokeWeight(0.7);
//   setLineDash([3,3]); 
//   setTimeout(march, 10);
//   ellipse(300,-15,235,235); 
//   pop();
    
// //13downoutercircle
//   push();
//   translate();
//   strokeWeight(0.7);
//   // setLineDash([3,3]); 
//   ellipse(300,720,205,205); 
//   pop();
    
// //14downmiddlecircle
//   push();
//   translate();
//   strokeWeight(1.8);
//    setLineDash([3,3]); 
//   ellipse(300,720,220,220); 
//   pop();
    
// //15downinnercircle
//   push();
//   translate();
//   strokeWeight(0.7);
//   // setLineDash([3,3]); 
//   ellipse(300,720,235,235); 
//   pop();
    
// //16downinnercircle
//   push();
//   translate();
//   strokeWeight(0.7);
//   // setLineDash([3,3]); 
//   ellipse(300,350,230,230); 
//   pop();
    
// //17downinnercircle
//   push();
//   translate();
//   strokeWeight(0.7);
//   setLineDash([3,3]); 
//   ellipse(300,350,240,240); 
//   pop()
    

    
    
//   pop();
// }
// }
// class Star {
// 	constructor() {
// 	this.x = random(width);
// 	this.y = random(height);
// 	this.size = random(0.15, 1.5);
// 	this.angle = random(TAU);
//     scale (0.8);
// }
// 	display() {
//     this.angle += 0.1;
//     let scale = this.size + cos(this.angle) * 1;
//     noStroke();
//     ellipse(this.x, this.y, scale, scale);
//     }
// }
// class daisy {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.size = 70;
//     this.sizeY = 10;
//     this.sizebigx = 20;
//     this.sizebigy = 100;
//     this.smallcirclesize = 10;
//     this.xSpd = random(-1, 1);
//     this.ySpd = random(1, 1);
//     this.angle = random(TWO_PI);
//     this.angleVel = random(0.01, 0.02);
//     this.isDone = false;
//     this.isShrink = false;
//     this.changecolor = color(random(255), random(255), random(255));
//     this.changecolorbig = color(random(100), random(255), random(255));
//     this.freq = frameCount * 0.005;
//     this.amp = 100;
//     this.scl = 1.0;
//   }

//   enlarge() {
//     // console.log(this.sizebigy)
//     if (this.isShrink == false) {
//       this.size += 0.8;
//       this.sizebigy += 0.8;
//       this.size = constrain(this.size, 10, 80);
//       this.sizebigy = constrain(this.sizebigy, 10, 150);
//     }
//   }

//   adjustScale(value) {
//     if (this.x > 0) {
//       this.scl += value;
//       this.scl = constrain(this.scl, 0.1, 1.5);
//     } else if (this.scl < 0) {
//       this.scl -= value;
//       this.scl = constrain(this.scl, 1.5, 0.1);
//     }
//     if (this.y > 0) {
//       this.scl += value;
//       this.scl = constrain(this.scl, 0.1, 1.5);
//     } else if (this.y < 0) {
//       this.scl -= value;
//       this.scl = constrain(this.scl, 1.5, 0.01);
//     }
//   }

//   shrink() {
//     // console.log(this.isShrink);
//     // console.log(this.sizebigy);
//     //   if (this.size>10 || this.size<80){
//     // this.size -= 0.8;
//     if (this.sizebigy >= 150) {
//       this.isShrink = true;
//     }
//     if (this.sizebigy <= 80) {
//       this.isShrink = false;
//     }

//     if (this.isShrink == true) {
//       // console.log("is shrinking!")
//       this.sizebigy = this.sizebigy - 0.9;
//     }

//     if (this.isShrink == true) {
//       // console.log("is shrinking!")
//       this.size = this.size - 0.9;
//     }
//   }

//   // methods
//   move() {
//     this.x += this.xSpd;
//     this.y += this.ySpd;
//     this.angle += this.angleVel;
//   }

//   display() {
//     push();
//     translate(width / 2, height / 2);
//     // translate(this.x, this.y);
//     // scale(this.scl);
//     // this.angle += this.angleVel;
//     rotate(this.angle);
//     scale(0.35);
//     noStroke();
//     scale();

//     //1bigup
//     push();
//     translate(0, -25);
//     rotate(25, 20);
//     noFill();
//     fill(255);
//     ellipse(0, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(0, 35, this.sizeY, this.size);
//     pop();

//     //2right
//     push();
//     translate(25, -26);
//     rotate(25.3, 20);
//     fill(255);
//     ellipse(0, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(0, 35, this.sizeY, this.size);
//     pop();

//     //3rightup
//     push();
//     translate(65, -4);
//     rotate(25.6, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size); //downleft
//     pop();

//     //4rightup
//     push();
//     translate(86, 20);
//     rotate(25.9, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //5rightup
//     push();
//     translate(100, 42);
//     rotate(26.2, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //6rightup
//     push();
//     translate(105, 67.5);
//     rotate(26.5, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //7right
//     push();
//     translate(100, 100);
//     rotate(26.8, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //8right
//     push();
//     translate(92, 130);
//     rotate(27.1, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //9right
//     push();
//     translate(75, 150);
//     rotate(27.4, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //10right
//     push();
//     translate(45, 160);
//     rotate(27.7, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //11right
//     push();
//     translate(15, 160);
//     rotate(28, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //12right
//     push();
//     translate(-15, 160);
//     rotate(28.3, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //13down
//     push();
//     translate(-45, 150);
//     rotate(28.6, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //13down
//     push();
//     translate(-45, 150);
//     rotate(28.6, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //14down
//     push();
//     translate(-65, 130);
//     rotate(28.9, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //15down
//     push();
//     translate(-80, 100);
//     rotate(29.2, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //16down
//     push();
//     translate(-90, 70);
//     rotate(29.5, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //17left
//     push();
//     translate(-90, 40);
//     rotate(29.8, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //18left
//     push();
//     translate(-70, 16);
//     rotate(30.1, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //19left
//     push();
//     translate(-48, -10);
//     rotate(30.4, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //20left
//     push();
//     translate(-22, -30);
//     rotate(30.8, 20);
//     fill(255);
//     ellipse(-18, 35, this.sizebigx, this.sizebigy);
//     fill(255,197,192);
//     ellipse(-18, 35, this.sizeY, this.size);
//     pop();

//     //bigmiddle
//     push();
//     translate(10, -33);
//     rotate();
//     noStroke();
//     fill(255,226,0);
//     ellipse(0, 100, 60, 60);
//     fill(255,226,0);
//     ellipse(0, 100, 40, 40);

//     pop();
//     pop();
//   }
// }
// class sunflower {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.petalx = 50;
//     this.petaly = 20;
//     this.smallcirclesize = 10;
//     this.angle = 0;
//   }
//   //methods
//   move() {
//     this.x += this.xSpd;
//     this.y += this.ySpd;
//     this.angle += this.angleVel;
//   }

//   display() {
//     push();
//     translate(width / 2, height / 2);
//     rotate(radians(width / 2, height / 2));
//     scale(0.6);
//     // scale(this.scl);
//     // this.angle += this.angleVel;
//     //inner
//     push();
//     noFill();
//     stroke(200, 200);
//     rotate(frameCount / 30);
//     strokeWeight(0.6);
//     ellipse(25, 0, this.petalx, this.petaly);
//     ellipse(-25, 0, this.petalx, this.petaly);

//     rotate(PI / 4);
//     strokeWeight(1.3);
//     ellipse(25, 0, this.petalx, this.petaly);
//     ellipse(-25, 0, this.petalx, this.petaly);

//     rotate(PI / 4);
//     strokeWeight(0.8);
//     ellipse(25, 0, this.petalx, this.petaly);
//     ellipse(-25, 0, this.petalx, this.petaly);

//     rotate(PI / 4);
//     strokeWeight(0.6);
//     ellipse(25, 0, this.petalx, this.petaly);
//     ellipse(-25, 0, this.petalx, this.petaly);
//     ellipse(0, 0, 20, 20);
//     pop();

//     //outer
//     push();
//     noFill();
//     strokeWeight(2);
//     stroke(200, 200);
//     rotate(frameCount * 0.009);
//     rotate(PI / 3);
//     ellipse(25, 0, 100, 17);
//     ellipse(-25, 0, 100, 17);

//     rotate(PI / 3);
//     ellipse(25, 0, 100, 17);
//     ellipse(-25, 0, 100, 17);

//     rotate(PI / 3);
//     ellipse(25, 0, 100, 17);
//     ellipse(-25, 0, 100, 17);

//     rotate(PI / 3);
//     ellipse(25, 0, 100, 17);
//     ellipse(-25, 0, 100, 17);
//     //ellipse(0,0,100,17);
//     pop();
    
//     // //bigmiddle
//         push();
//         translate();
//         rotate(frameCount/30);
//         image(img,-30,-30,60,60);
//         pop();
//     pop();
//   }
// }
// class aster {
//   constructor(x,y) {
//     this.x = x;
//     this.y = y;
//     this.xSpd = random(0, 1); 
//     this.ySpd = random(0, 1); 
//     this.size = PI/170;
//     this.dx = 0.4;
//     this.xpoint = 5;
//   }
//   // methods
//   move(){
//   this.x += this.xSpd;
//   this.y += this.ySpd;
//   this.ypoint += 0.005;
//   }
  
    
//   display() {
//     push();
//     translate(width/2,height/2);
//     // this.angle += this.angleV;
//     // rotate(this.angle);
//     scale(0.5);
// 	beginShape();
// 	for (let a = 0; a <= TWO_PI; a += this.size) {
// 		let n = noise(this.xpoint, ypoint);
// 		let r = sin(10 * a) * map(n, 0.6, 1, 80, 250);
// 		let x = r * cos(a);
// 		let y = r * sin(a);
// 		if (a < PI) {
// 			this.xpoint += this.dx;
// 		} else {
// 			this.xpoint -= this.dx;
// 		}
// 		//point(x, y);
// 		vertex(x, y);
// 	}
// 	endShape();
//     pop();
//   }

// }
