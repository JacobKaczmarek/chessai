import { onChange, onDragStart, onDrop, onSnapEnd, onMouseoverSquare, onMouseoutSquare } from './js/boardcontroll.js';

const config = {
  position: 'start',
  draggable: true,
  onChange: onChange,
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd,
  onMouseoverSquare: onMouseoverSquare,
  onMouseoutSquare: onMouseoutSquare
};

board = Chessboard('board', config);
