const generateBoard = function(white, black) {
  let rows = [];
  for (let y = 0; y < 8; y++) {
    let columns = [];
    for (let x = 0; x < 8; x++) {
      if ((y === white[0] && x === white[1]) || (y === black[0] && x === black[1])) {
        columns[x] = 1;
      } else {
        columns[x] = 0;
      }
    }
    rows.push(columns);
  }
  return rows;
};

const queenThreat = function(board) {
  let black;
  let white;
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (!black && board[y][x] === 1) {
        black = [x, y];
      } else if (!white && board[y][x] === 1) {
        white = [x, y];
      }
    }
  }
  return Math.abs(black[0] - black[1]) === Math.abs(white[0] - white[1]);
};

/*
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
*/

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));