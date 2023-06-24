const {test, expect} = require('@jest/globals');
const {JSDOM} = require('jsdom');
let {cells, resetBtn, message, handleClick, currentPlayer} = require('./script.js');


const {window} = new JSDOM(`
    <!DOCTYPE html>
    <html>
    <body>
    <div class="container">
      <h1 id="header">Tic - Tac - Toe</h1>
      <div id="game-board">
        <div class="cells" id="cell-1" data-input></div>
        <div class="cells" id="cell-2" data-input></div>
        <div class="cells" id="cell-3" data-input></div>
        <div class="cells" id="cell-4" data-input></div>
        <div class="cells" id="cell-5" data-input></div>
        <div class="cells" id="cell-6" data-input></div>
        <div class="cells" id="cell-7" data-input></div>
        <div class="cells" id="cell-8" data-input></div>
        <div class="cells" id="cell-9" data-input></div>
      </div>
      <div id="message"></div>
      <button id="reset">Reset Game</button>
    </div>
    </body>
    </html>
`);

global.document = window.document;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};
// Test for current player is Player 1
test('Initial current player is Player 1', () => {
    expect(currentPlayer).toBe('Player 1');
});
// test for click works
test('the handle click updtaes cell text content and class', () => {
    testCell = document.createElement('div');
    testCell.textContent = '';

    currentPlayer = 'Player 1';
    handleClick.call(testCell);
    expect(testCell.textContent).toBe('X');
    expect(testCell.classList.contains('x')).toBe(true);
});
// test for switch players
test('the handle click switches players', () => {
    testCell = document.createElement('div');
    testCell.textContent = '';

    currentPlayer = 'Player 1';
    handleClick.call(testCell);
    let expectedPlayer = currentPlayer === 'Player 1' ? 'O' : 'X';
    expect(testCell.textContent).toBe(expectedPlayer);
});