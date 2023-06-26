const cells = document.querySelectorAll('.cells');
const resetBtn = document.getElementById('reset');
let winningCells = null;

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
        document.getElementById('winningMessage').textContent = `${currentPlayer} wins!`;
        $('#winningModal').modal('show');
        disableCells();
        highlightWinningCells();
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
        winningCells = [cells[0], cells[1], cells[2]];
      return true;
    }
    if (cells[3].textContent !== '' && cells[3].textContent === cells[4].textContent 
    && cells[4].textContent === cells[5].textContent) {
        winningCells = [cells[3], cells[4], cells[5]];
        return true;
    }
    if (cells[6].textContent !== '' && cells[6].textContent === cells[7].textContent 
    && cells[7].textContent === cells[8].textContent) {
        winningCells = [cells[6], cells[7], cells[8]];
      return true;
    }
  
    // Check for vertical win
    if (cells[0].textContent !== '' && cells[0].textContent === cells[3].textContent 
    && cells[3].textContent === cells[6].textContent) {
        winningCells = [cells[0], cells[3], cells[6]];
      return true;
    }
    if (cells[1].textContent !== '' && cells[1].textContent === cells[4].textContent 
    && cells[4].textContent === cells[7].textContent) {
        winningCells = [cells[1], cells[4], cells[7]];
      return true;
    }
    if (cells[2].textContent !== '' && cells[2].textContent === cells[5].textContent 
    && cells[5].textContent === cells[8].textContent) {
        winningCells = [cells[2], cells[5], cells[8]];
      return true;
    }
  
    // Check for diagonal win
    if (cells[0].textContent !== '' && cells[0].textContent === cells[4].textContent 
    && cells[4].textContent === cells[8].textContent) {
        winningCells = [cells[0], cells[4], cells[8]];
      return true;
    }
    if (cells[2].textContent !== '' && cells[2].textContent === cells[4].textContent
    && cells[4].textContent === cells[6].textContent) {
        winningCells = [cells[2], cells[4], cells[6]];
      return true;
    }

    winningCells = null;
    return false;
}

// function to highlight winning cells once there is a win
function highlightWinningCells() {
    if (winningCells) {
        winningCells.forEach(cell => {
            cell.classList.add('win-' + cell.textContent.toLowerCase());
        });
    }
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
        cell.classList.remove('win-x');
        cell.classList.remove('win-o');
        cell.addEventListener('click', handleClick);
    });
    currentPlayer = 'Player 1';
    document.getElementById('currentPlayerText').textContent = (`${currentPlayer}'s turn`);
    $('#currentPlayerModal').modal('show');
    document.getElementById('winningMessage').textContent = '';
    winningCells = null;
});



// export functions
// module.exports = {cells, resetBtn, message, handleClick, currentPlayer};