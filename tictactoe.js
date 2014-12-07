// @TODO: add inline documentation
(function() {
  'use strict';

  var
  squares = [],
  score,
  moves,
  turn = 'X',

  winningScores = [7, 56, 448, 73, 146, 292, 273, 84],

  startNewGame = function() {
    var i;

    turn = 'X';
    score = {
      'X': 0,
      'O': 0
    };
    moves = 0;
    for (i = 0; i < squares.length; i += 1) {
      squares[i].firstChild.nodeValue = '';
    }
  },

  checkWin = function(score) {
    var i;
    for (i = 0; i < winningScores.length; i += 1) {
      if ((winningScores[i] & score) === winningScores[i]) {
        return true;
      }
    }
    return false;
  },

  chooseSquare = function() {
    if (this.firstChild.nodeValue.trim() !== '') {
      alert('Choose a different square.')
      return;
    }
    this.firstChild.nodeValue = turn;
    moves += 1;
    score[turn] += this.squareScore;
    if (moves > 4 && checkWin(score[turn])) {
      alert(turn + ' wins!');
      startNewGame();
    } else if (moves === 9) {
      alert('It\'s a tie!');
      startNewGame();
    } else {
      turn = turn === 'X' ? 'O' : 'X';
    }
  },

  createBoard = function() {
    var board = document.createElement('table'),
      squareScore = 1,
      i, j,
      row, cell;
    board.border = 1;
    for (i = 0; i < 3; i += 1) {
      row = document.createElement('tr');
      board.appendChild(row);
      for (j = 0; j < 3; j += 1) {
        cell = document.createElement('td');
        cell.width = cell.height = 50;
        cell.align = cell.valign = 'center';
        cell.squareScore = squareScore;
        cell.onclick = chooseSquare;
        cell.appendChild(document.createTextNode(''));
        row.appendChild(cell);
        squares.push(cell);
        squareScore += squareScore;
      }
    }

    document.getElementById('tictactoe').appendChild(board);
  };

  createBoard();
  startNewGame();
}());
