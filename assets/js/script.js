const cells = document.querySelectorAll('.cells');
const resetBtn = document.getElementById('reset');
const message = document.getElementById('message');

// Player 1 = X
// Player 2 = O
let currentPlayer = 'Player 1';


cells.forEach(cells => {
    cells.addEventListener('click', handleClick);
})

function handleClick() {
    if (this.textContent !== '') {
        return;
    }

    if (currentPlayer === 'Player 1') {
        this.textContent = 'X';
        this.classList.add('x');
    } else {
        this.textContent = 'O';
        this.classList.add('o');
    }
    // to switch players
    currentPlayer = currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
}