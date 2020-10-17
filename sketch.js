var hr,mn,sc;
var scAngle,mnAngle,hrAngle
function setup() {
  createCanvas(1350,800);
  
}

function draw() {
  background(0,0,0);
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES);
  hrAngle = map(hr,0,60%12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  push();
  rotate(scAngle);
  translate(scAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(585, 520, 585, 575);  
  pop(); 

  push();
  rotate(mnAngle);
  translate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(585, 520, 585, 575);  
  pop(); 

  push();
  rotate(hrAngle);
  translate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(585, 520, 585, 575);  
  pop();    

  drawSprites();
}