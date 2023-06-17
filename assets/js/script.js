const cells = document.querySelectorAll('.cells');
const resetBtn = document.getElementById('reset');
const message = document.getElementById('message');

// Player 1 = X
// Player 2 = O
let currentPlayer = 'Player 1';


cells.forEach(cells => {
    cells.addEventListener('click', handleClick);
});
// function to handle click
function handleClick() {
    if (this.textContent !== '') {
        return;
    }

    if (currentPlayer === 'Player 1') {
        this.textContent = 'X';
        this.classList.add('x');
    } else {
        currentPlayer = 'Player 2';
        this.textContent = 'O';
        this.classList.add('o');
    }
    
    if (checkWin()) {
        message.textContent = `${currentPlayer} wins!`;
        return;
    }
    // to switch players
    currentPlayer = currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
}
// function to check if win
function checkWin() {
    // Check for horizontal win
    if (cells[0].textContent !== '' && cells[0].textContent === cells[1].textContent 
    && cells[1].textContent === cells[2].textContent) {
      return true;
    }
    if (cells[3].textContent !== '' && cells[3].textContent === cells[4].textContent 
    && cells[4].textContent === cells[5].textContent) {
      return true;
    }
    if (cells[6].textContent !== '' && cells[6].textContent === cells[7].textContent 
    && cells[7].textContent === cells[8].textContent) {
      return true;
    }
  
    // Check for vertical win
    if (cells[0].textContent !== '' && cells[0].textContent === cells[3].textContent 
    && cells[3].textContent === cells[6].textContent) {
      return true;
    }
    if (cells[1].textContent !== '' && cells[1].textContent === cells[4].textContent 
    && cells[4].textContent === cells[7].textContent) {
      return true;
    }
    if (cells[2].textContent !== '' && cells[2].textContent === cells[5].textContent 
    && cells[5].textContent === cells[8].textContent) {
      return true;
    }
  
    // Check for diagonal win
    if (cells[0].textContent !== '' && cells[0].textContent === cells[4].textContent 
    && cells[4].textContent === cells[8].textContent) {
      return true;
    }
    return !!(cells[2].textContent !== '' && cells[2].textContent === cells[4].textContent 
    && cells[4].textContent === cells[6].textContent);
}
// function to reset game
resetBtn.addEventListener('click', () => {
    cells.forEach(cells => {
        cells.textContent = '';
    });
    message.textContent = '';
    currentPlayer = 'Player 1';
    cells.forEach(cells => {
        cells.classList.remove('x');
        cells.classList.remove('o');
    });
    cells.forEach(cells => {
        cell.addEventListener('click', handleClick);
    });
});



// export functions

module.exports = {cells, resetBtn, message, handleClick, currentPlayer};