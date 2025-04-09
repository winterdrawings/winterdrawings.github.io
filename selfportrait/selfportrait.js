function setup() {
  createCanvas(600, 600);
  background(55);
 

}


function draw() {
  //head
  fill(255, 208, 163);
  ellipse(300, 300 ,299, 375);
  
  
  //left eye
  fill(250);
  ellipse(230, 250, 50, 38);
  
  //left pupil
  fill(139, 69, 19);
  circle(230, 250, 25);
  
  //right eye
  strokeWeight(0);
  fill(250);
  ellipse(360, 250, 50, 38);
  
  //right pupil
  fill(0);
  ellipse(362, 250, 25, 30);
  
  //right iris
  fill(139, 69, 19);
  circle(362, 250, 16);
  
  //mouth
  fill(255, 182, 193);
  arc(300,370, 80, 40, 0, PI, CHORD);
}
