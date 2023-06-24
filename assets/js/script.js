const cells = document.querySelectorAll('.cells');
const resetBtn = document.getElementById('reset');

// Player 1 = X
// Player 2 = O
let currentPlayer = 'Player 1';


cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

// Function to handle clicks on the board.
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
        // change the color of the winning marks based on the current player
        let winningClass = currentPlayer === 'Player 1' ? 'x' : 'o';
        cells.forEach(cell => {
            if (cell.classList.contains(winningClass)) {
                cell.classList.add(`win-${winningClass}`);
            }
        });
        document.getElementById('winningMessage').textContent = `${currentPlayer} wins!`;
        $('#winningModal').modal('show');
        disableCells();
        return;
    }

    if (checkDraw()) {
        document.getElementById('winningMessage').textContent = "It's a tie!";
        $('#winningModal').modal('show');
        disableCells();
        return;
    }
    
    // to switch players
    currentPlayer = currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
    document.getElementById('currentPlayerText').textContent = (`${currentPlayer}'s turn`);
    $('#currentPlayerModal').modal('show');
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
// function to check if theres a draw
function checkDraw() {
    let draw = true;
    cells.forEach(cell => {
        if (cell.textContent === '') {
            draw = false;
        }
    });
    return draw;
}

// function to disable the cells after win
function disableCells() {
    cells.forEach(cell => {
        cell.removeEventListener('click', handleClick);
    });
}
// function to reset game
resetBtn.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.addEventListener('click', handleClick);
    });
    currentPlayer = 'Player 1';
    $('#currentPlayer').text(`${currentPlayer}'s turn`);
    document.getElementById('winningMessage').textContent = '';
});



// export functions
// module.exports = {cells, resetBtn, message, handleClick, currentPlayer};