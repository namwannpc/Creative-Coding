
let angle = 0;
let angleVel = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  
  angle += angleVel;
  let dia = random(10,30);//diameter
  
  translate(width/2,height/2);
  rotate(radians(angle));
  ellipse(-30,-30,dia,dia);
  ellipse(30,-30,dia,dia);
  ellipse(-30,30,dia,dia);
  ellipse(30,30,30,30);
  ellipse(100,100,30,30);
}