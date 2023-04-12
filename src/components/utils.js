export function getInitialState() {
  const board = [];
  for (let i = 0; i < 8; i++) {
    board.push(new Array(8));
  }

  let startBlack = true;
  for (let i = 0; i < 8; i++) {
    let isBlack = startBlack;
    for (let j = 0; j < 8; j++) {
      board[i][j] = {
        isBlack,
        isAttackable: false,
        row: i,
        col: j,
      };
      isBlack = !isBlack;
    }
    startBlack = !startBlack;
  }
  return board;
}

export const getUpdatedBoard = (i, j, board) => {
  let c = j - 1;
  for (let r = i - 1; r >= 0 && c >= 0; r--, c--) {
    board[r][c].isAttackable = true;
  }

  c = j + 1;
  for (let r = i - 1; r >= 0 && c < 8; r--, c++) {
    board[r][c].isAttackable = true;
  }

  c = j - 1;
  for (let r = i + 1; r < 8 && c >= 0; r++, c--) {
    board[r][c].isAttackable = true;
  }

  c = j + 1;
  for (let r = i + 1; r < 8 && c < 8; r++, c++) {
    board[r][c].isAttackable = true;
  }

  return [...board];
};
