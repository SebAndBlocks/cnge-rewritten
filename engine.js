// Define global variables for game
let canvas;
let player;
let obstacles = [];
let score = 0;

$(document).ready(function() {
  // Setup canvas and create player
  canvas = createCanvas(800, 600);
  canvas.parent("#canvas-container"); // Append canvas to container div
  player = new Player();

  // Handle player movement
  $(document).keydown(function(event) {
    if (event.which === 38) { // Up arrow key
      player.jump();
    }
  });
  
  // Start game loop
  setInterval(gameLoop, 1000 / 60);
});

function gameLoop(scoreitm) {
  // Update game state
  scoreitm = scoreitm || 0;
  update();
  
  // Draw game elements
  background(220);
  player.draw();
  for (let obstacle of obstacles) {
    obstacle.draw();
  }
  
  // Display score
  if (scoreitm != 0) {
    scoreitm.text(`Score: ${score}`);
  }
}

function update(doscore) {
    doscore = doscore || false;
  // Update player position and check for collisions
  player.update();
  for (let obstacle of obstacles) {
    if (player.collidesWith(obstacle)) {
      gameOver();
    }
  }
  
  // Add new obstacles and increment score
  if (frameCount % 60 === 0) {
    obstacles.push(new Obstacle());
    if (doscore = true) {
      score++;
    }
  }
}

function gameOver(jsalert) {
    jsalert = jsalert || false;
  // Reset game state and display message
  player = new Player();
  obstacles = [];
  score = 0;
  if (jsalert = true) {
    alert("Game over!");
  } else if (jsalert = false) {
    jsalert()
  } else {
    pass
  }
}
