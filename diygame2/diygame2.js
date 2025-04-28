var ballx = 300;
var bally = 300;
var ballSize = 60;
var img;
var img2;
var imgbackground;
var score = 0;
var gameState = "L1";

function preload() {
  img = loadImage('https://winterdrawings.github.io/jerrychase1.png');
  img2 = loadImage('https://winterdrawings.github.io/tom&errypictures.jpg');
  imgbackground = loadImage('https://winterdrawings.github.io/bscene.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(250);

 if (gameState === "L1") {
    levelOne();
  } else if (gameState === "L2") {
    levelTwo();
  } else if (gameState === "L3") {
    levelThree();
  } else if (gameState === "L4") {
    levelFour();
  } else if (gameState === "L5") {
    levelFive();
  } else if (gameState === "END") {
    endGame();
  }

  if (gameState !== "END") {
    text("Score: " + score, width / 2, 40);
  }
}

function levelOne() {
  background(imgbackground);
  fill(255, 255, 255);
  text("Level 1!", width / 2, height - 20);
  cursor("https://winterdrawings.github.io/tomchase1.png", 0, 0);
  // Check if mouse is over the image
  let d = dist(ballx, bally, mouseX, mouseY);
  if (d < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
  }

  if (score >= 5) {
    gameState = "L2";
  }

  image(img, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
}

function levelTwo() {
  background(imgbackground);
  fill(255, 255, 255);
  text("Level 2!", width / 2, height - 20);
  cursor("https://winterdrawings.github.io/tomchase1.png", 0, 0);  
  let d = dist(ballx, bally, mouseX, mouseY);
  if (d < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
  }

  if (score >= 10) {
    gameState = "L3";
  }

  image(img, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
}
function levelThree() {
  background(imgbackground);
  fill(255, 255, 255);
  text("Level 3! Halfway!", width / 2, height - 20);
  cursor("https://winterdrawings.github.io/tomchase1.png", 0, 0);
  let d = dist(ballx, bally, mouseX, mouseY);
  if (d < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
  }

  if (score >= 15) {
    gameState = "L4";
  }

  image(img, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
}
function levelFour() {
  background(imgbackground);
  fill(255, 255, 255);
  text("Level 4 Almost caught Jerry!", width / 2, height - 20);
  cursor("https://winterdrawings.github.io/tomchase1.png", 0, 0);
  let d = dist(ballx, bally, mouseX, mouseY);
  if (d < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
  }

  if (score >= 20) {
    gameState = "L5";
  }

  image(img, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
}

function levelFive() {
  background(imgbackground);
  cursor("https://winterdrawings.github.io/tomchase1.png", 0, 0);
  text("Level 5!", width / 2, height - 20);

  let d = dist(ballx, bally, mouseX, mouseY);
  if (d < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score++;
    ballSize = max(10, ballSize - 5); // keeps ball from disappearing
  }

  if (score >= 25) {
    gameState = "END";
  }

  image(img, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
}
function endGame() {
  image(img2, 0, 0, width, height);
  
  // Optional: Add a slight shadow or border to help the text stand out
  fill(0, 255, 0);
  stroke(0);
  strokeWeight(2);

  textSize(30);
  text("You caught Jerry!", width / 2, height / 2);
  textSize(20);
  text("Final Score: " + score, width / 2, height / 2 + 40);
  text("Press any key to restart", width / 2, height / 2 + 80);
}


function keyPressed() {
  if (gameState === "END") {
    score = 0;
    ballSize = 60; // ✅ Reset Jerry size for new game
    ballx = random(width);
    bally = random(height);
    gameState = "L1";
  }
}
