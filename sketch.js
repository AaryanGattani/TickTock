var hr,sec,min;

function setup() {
  createCanvas(700,700);
  
}

function draw() {
  hr = hour();
  min = minute();
  sc = second();  

  background(0);  
  angleMode(DEGREES)
  translate(350,350)
  scAngle = map(sc,0,60,0,360)
  minAngle = map(min,0,60,0,360)
  hrAngle = map(hr,0,12,0,360)

  push()
  rotate(minAngle);
  stroke(120,180,10)
  strokeWeight(7)
  line(0,0,230,0)
  pop();
  
  push()
  rotate(scAngle);
  stroke(145,255,200)
  strokeWeight(7)
  line(0,0,260,0)
  pop()
  
  push()
  rotate(hrAngle);
  stroke(180,120,60)
  strokeWeight(7)
  line(0,0,180,0)
  pop()
 
  noFill()
  stroke(180,120,60)
  strokeWeight(7)
  arc(0,0,690,690,0,hrAngle);

  stroke(120,180,10)
  strokeWeight(7)
  arc(0,0,640,640,0,minAngle);

  stroke(145,255,200)
  strokeWeight(7)
  arc(0,0,590,590,0,scAngle);

  
  drawSprites();
}