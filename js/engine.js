

const generateBestMove = (depth) => {
  return miniMaxRoot(game, depth, false);
}

const miniMaxRoot = (game, depth, isMaximising) => {
  const allMoves = game.moves();
  let bestMove = null;
  let bestValue = 1000;
  const start = Date.now();

  allMoves.forEach(move => {
    game.move(move);
    const boardValue = -minimax(game, depth - 1, !isMaximising);
    game.undo();

    if (boardValue < bestValue) {
      bestMove = move;
      bestValue = boardValue;
    }
  })
  
  console.log(`Calculation time: ${(Date.now() - start) / 1000}s`);

  return bestMove;
}

const minimax = (game, depth, isMaximising) => {
  if (depth === 0) {
    return -evaluate(game);
  }

  const allMoves = game.moves();
  let boardValue;

  if (isMaximising) {
    let bestValue = -1000;

    allMoves.forEach(move => {
      game.move(move);
      boardValue = minimax(game, depth - 1, !isMaximising);

      bestValue = boardValue > bestValue ? boardValue : bestValue;

      game.undo();
    })
  } else {
    let bestValue = 1000;

    allMoves.forEach((move) => {
      game.move(move);
      boardValue = minimax(game, depth - 1, !isMaximising);

      bestValue = boardValue < bestValue ? boardValue : bestValue;

      game.undo();
    });
  }

  return boardValue;
}

const evaluate = (game) => {
  const board = game.board();
  let value = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      value += pieceValue(board[i][j]);
    }
  }

  return value;
}

const pieceValue = (piece) => {
  const side = {
    b: -1,
    w: 1
  }

  const values = {
    p: 1,
    n: 3,
    b: 3,
    r: 5,
    q: 9,
    k:90
  }

  return piece !== null ? values[piece.type] * side[piece.color] : 0;
}

export { generateBestMove }