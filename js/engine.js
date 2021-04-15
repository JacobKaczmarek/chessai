import pieceSquareValues from './pieceSquareValues.js';

const generateBestMove = (depth) => {
  return miniMaxRoot(game, depth, true);
}

const miniMaxRoot = (game, depth, isMaximising) => {
  const allMoves = game.moves();
  let bestMove = null;
  let bestValue = -1000;

  allMoves.forEach(move => {
    game.move(move);
    const boardValue = minimax(game, depth - 1, -1000, 1000, !isMaximising);
    game.undo();

    if (boardValue >= bestValue) {
      bestMove = move;
      bestValue = boardValue;
    }
  })

  return bestMove;
}

const minimax = (game, depth, alpha, beta, isMaximising) => {
  positionCount++;

  if (depth === 0) {
    return -evaluate(game);
  }

  const allMoves = game.moves();
  let boardValue;

  if (isMaximising) {
    let bestValue = -1000;

    allMoves.forEach(move => {
      game.move(move);
      bestValue = Math.max(
        minimax(game, depth - 1, alpha, beta, !isMaximising),
        bestValue
      );
      game.undo();

      alpha = Math.max(alpha, bestValue);

      if (beta <= alpha) {
        return bestValue
      }
    })

    return bestValue;

  } else {
    let bestValue = 1000;

    allMoves.forEach((move) => {
      game.move(move);
      bestValue = Math.min(
        minimax(game, depth - 1, alpha, beta, !isMaximising),
        bestValue
      );
      game.undo();

      beta = Math.min(beta, bestValue);

      if (beta <= alpha) {
        return bestValue;
      }
    });

    return bestValue;
  }
}

const evaluate = (game) => {
  const board = game.board();
  let material = 0;
  let positioning = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      material += pieceValue(board[i][j]);
      positioning += piecePositionValue(board[i][j], i, j)
    }
  }

  const value = material + positioning;

  return value;
}

const pieceValue = (piece) => {
  const side = {
    b: -1,
    w: 1
  }

  const values = {
    p: 10,
    n: 30,
    b: 30,
    r: 50,
    q: 90,
    k: 900
  }

  return piece !== null ? values[piece.type] * side[piece.color] : 0;
}

const piecePositionValue = (piece, i, j) => {
  if (piece === null) return 0;

  let value;
  switch (piece.type) {
    case 'p':
      value = piece.color === 'w' ? pieceSquareValues.earlyPawnWhite[i][j] : pieceSquareValues.earlyPawnBlack[i][j]
      break;
    case 'n':
      value = piece.color === 'w' ? pieceSquareValues.earlyKnightWhite[i][j] : pieceSquareValues.earlyKnightBlack[i][j]
      break;
    case 'b':
      value = piece.color === 'w' ? pieceSquareValues.earlyBishopWhite[i][j] : pieceSquareValues.earlyBishopBlack[i][j]
      break;
    case 'r':
      value = piece.color === 'w' ? pieceSquareValues.earlyRookWhite[i][j] : pieceSquareValues.earlyRookBlack[i][j]
      break;
    case 'q':
      value = piece.color === 'w' ? pieceSquareValues.earlyQueenWhite[i][j] : pieceSquareValues.earlyQueenBlack[i][j]
      break;
    case 'k':
      value = piece.color === 'w' ? pieceSquareValues.earlyKingWhite[i][j] : pieceSquareValues.earlyKingBlack[i][j]
      break;
  }

  return piece.color === 'w' ? value : -value;
}

export { generateBestMove, evaluate }