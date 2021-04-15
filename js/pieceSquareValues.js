const reverse = (arr) => {
  return arr.slice().reverse();
}

const pieceSquareValues = new Object();
pieceSquareValues.earlyKingWhite = [
  [-3, -4, -4, -5, -5, -4, -4, -3],
  [-3, -4, -4, -5, -5, -4, -4, -3],
  [-3, -4, -4, -5, -5, -4, -4, -3],
  [-3, -4, -4, -5, -5, -4, -4, -3],
  [-2, -3, -3, -4, -4, -3, -3, -2],
  [-1, -2, -2, -2, -2, -2, -2, -1],
  [2, 2, 0, 0, 0, 0, 0, 2],
  [2, 3, 1, 0, 0, 1, 3, 2],
]
pieceSquareValues.earlyQueenWhite = [
  [-2, -1, -1, -0.5, -0.5, -1, -1, -2],
  [-1, 0, 0, 0, 0, 0, 0, -1],
  [-1, 0, 0.5, 0.5, 0.5, 0.5, 0, -1],
  [-0.5, 0, 0.5, 0.5, 0.5, 0.5, 0, -0.5],
  [0, 0, 0.5, 0.5, 0.5, 0.5, 0, -0.5],
  [-1, 0.5, 0.5, 0.5, 0.5, 0.5, 0, -1],
  [-1, 0, 0.5, 0, 0, 0, 0, -1],
  [-2, -1, -1, -0.5, -0.5, -1, -1, -2],
]
pieceSquareValues.earlyRookWhite = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0.5, 1, 1, 1, 1, 1, 1, 0.5],
  [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
  [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
  [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
  [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
  [-0.5, 0, 0, 0, 0, 0, 0, -0.5],
  [0, 0, 0, 0.5, 0.5, 0, 0, 0],
]
pieceSquareValues.earlyBishopWhite = [
  [-2, -1, -1, -1, -1, -1, -1, -2],
  [-1, 0, 0, 0, 0, 0, 0, -1],
  [-1, 0, 0.5, 1, 1, 0.5, 0, -1],
  [-1, 0.5, 0.5, 1, 1, 0.5, 0.5, -1],
  [-1, 0, 1, 1, 1, 1, 0, -1],
  [-1, 1, 1, 1, 1, 1, 1, -1],
  [-1, 0.5, 0, 0, 0, 0, 0.5, -1],
  [-2, -1, -1, -1, -1, -1, -1, -2],
]
pieceSquareValues.earlyKnightWhite = [
  [-5, -4, -3, -3, -3, -3, -4, -5],
  [-4, -2, 0, 0, 0, 0, -2, -4],
  [-3, 0, 1, 1.5, 1.5, 1, 0, -3],
  [-3, 0.5, 1.5, 2, 2, 1.5, 0.5, -3],
  [-3, 0, 1.5, 2, 2, 1.5, 0.0, -3],
  [-3, 0.5, 1, 1.5, 1.5, 1, 0.5, -3],
  [-4, -2, 0, 0.5, 0.5, 0, -2, -4],
  [-5, -4, -3, -3, -3, -3, -4, -5],
]
pieceSquareValues.earlyPawnWhite = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [5, 5, 5, 5, 5, 5, 5, 5],
  [1, 1, 2, 3, 3, 2, 1, 1],
  [0.5, 0.5, 1, 2.5, 2.5, 1, 0.5, 0.5],
  [0, 0, 0, 2, 2, 0, 0, 0],
  [0.5, -0.5, -1, 0, 0, -1, -0.5, 0.5],
  [0.5, 1, 1, -2, -2, 1, 1, 0.5],
  [0, 0, 0, 0, 0, 0, 0, 0],
]
pieceSquareValues.earlyPawnBlack = pieceSquareValues.earlyPawnWhite.slice().reverse();
pieceSquareValues.earlyKnightBlack = pieceSquareValues.earlyKnightWhite.slice().reverse()
pieceSquareValues.earlyBishopBlack = pieceSquareValues.earlyBishopWhite.slice().reverse()
pieceSquareValues.earlyRookBlack = pieceSquareValues.earlyRookWhite.slice().reverse()
pieceSquareValues.earlyQueenBlack = pieceSquareValues.earlyQueenWhite.slice().reverse()
pieceSquareValues.earlyKingBlack = pieceSquareValues.earlyKingWhite.slice().reverse()


export default pieceSquareValues;