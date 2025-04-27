var ballx = 300;
var bally = 300;
var ballSize = 40;
var img;
var score = 0;
var gameState = "L1";

function preload() {
  img = loadImage();
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(250);

  if (gameState == "L1") {
    levelOne();
  } else if (gameState == "L2") {
    levelTwo();
  } else if (gameState == "L3") {
    levelThree();
  } else if (gameState == "END") {
    endGame();
  }

  if (gameState != "END") {
    fill(0);
    text("Score: " + score, width / 2, 40);
  }
}

function levelOne() {
  text("Level 1!", width / 2, height - 20);

  var disToBall = dist(ballx, bally, mouseX, mouseY);
  if (disToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
  }

  if (score >= 5) {
    gameState = "L2";
  }

  ellipse(ballx, bally, ballSize, ballSize);
} //end of level 1

function levelTwo() {
  background(200, 100, 0);
  text("Level 2!", width / 2, height - 20);

  var disToBall = dist(ballx, bally, mouseX, mouseY);
  if (disToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
  }

  if (score >= 10) {
    gameState = "L3";
  } 

  ellipse(ballx, bally, ballSize, ballSize);
} //end of level 2

function levelThree() {
  background(100, 0, 200);
  text("Level 3!", width / 2, height - 20);

  var disToBall = dist(ballx, bally, mouseX, mouseY);
  if (disToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
    ballSize = max(10, ballSize - 5); // keeps ball from disappearing
  }

  if (score >= 15) {
    gameState = "END";
  }

  ellipse(ballx, bally, ballSize, ballSize);
}

function endGame() {
  background(0);
  fill(255);
  textSize(30);
  text("Good game!", width / 2, height / 2);
  textSize(20);
  text("Final Score: " + score, width / 2, height / 2 + 40);
  text("Press any key to restart", width / 2, height / 2 + 80);
}

function keyPressed() {
  if (gameState == "END") {
    score = 0;
    ballSize = 40;
    ballx = random(width);
    bally = random(height);
    gameState = "L1";
  }
}
