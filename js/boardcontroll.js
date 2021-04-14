import { generateBestMove } from './engine.js';

const aiMove = () => {
  const move = generateBestMove();
  game.move(move);
  board.position(game.fen())
}

const onChange = () => {
  if (game.game_over()) {
    alert('Game over');
  }
}

const onDragStart = (source, piece, position, orientation) => {
  // do not pick up pieces if the game is over
  if (game.game_over()) return false;

  // only pick up pieces for the side to move
  if (
    (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
    (game.turn() === 'b' && piece.search(/^w/) !== -1)
  ) {
    return false;
  }
};

const onDrop = (source, target) => {
  // see if the move is legal
  let move = game.move({
    from: source,
    to: target,
    promotion: 'q', // NOTE: always promotes to a queen
  });

  // illegal move
  if (move === null) return 'snapback';

  setTimeout(aiMove, 250);

  removeGreySquares();
};

function onSnapEnd() {
  board.position(game.fen());
}

const onMouseoverSquare = function (square, piece) {
  const moves = game.moves({
    square,
    verbose: true,
  });

  if (moves.length === 0) return;

  moves.forEach((move) => {
    greySquare(move.to);
  });
};

const onMouseoutSquare = function (square, piece) {
  removeGreySquares();
};

const removeGreySquares = function () {
  $('#board .square-55d63').css('background', '');
};

const greySquare = function (square) {
  const squareEl = $('#board .square-' + square);

  let background = '#a9a9a9';
  if (squareEl.hasClass('black-3c85d') === true) {
    background = '#696969';
  }

  squareEl.css('background', background);
};

export { onChange, onDragStart, onDrop, onSnapEnd, onMouseoverSquare, onMouseoutSquare }