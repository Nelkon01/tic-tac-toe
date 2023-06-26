document.addEventListener('DOMContentLoaded', function() {
    const gameInstructions = document.getElementById('instructions-btn');
    const gameStart = document.getElementById('game-start-btn');
    const instructionsContent = document.getElementById('game-instructions');
  
    gameInstructions.addEventListener('click', function() {
      instructionsContent.classList.toggle('hidden');
    });
  
    gameStart.addEventListener('click', function() {
      window.location.href = "game.html";
    });
  });
  