var hr,mn,sc;
var scAngle,mnAngle,hrAngle
function setup() {
  createCanvas(1350,800);
  angleMode(DEGREES)
}

function draw() {
  background(0,0,0);
  hr = hour();
  mn = minute();
  sc = second();
  hrAngle = map(hr,0,60%12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);
  translate(200,200)
  push();
  rotate(scAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,110,50);  

  pop(); 

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,80,80);  
  pop(); 

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,50,50);  
  pop();    

  drawSprites();
}