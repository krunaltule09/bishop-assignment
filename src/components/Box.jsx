import { useState } from "react";
import { getInitialState } from "./utils";

const getUpdatedBoard = (i, j, board) => {
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

function Box({ data, board, updateBoard }) {
  const [isHovering, setIsHovering] = useState(false);
  const handleHover = () => {
    console.log("hovered");
    updateBoard((b) => getUpdatedBoard(data.row, data.col, b));
    setIsHovering(true);
  };

  return (
    <div
      className={
        data?.isAttackable ? "lightblue" : data?.isBlack ? "black" : "white"
      }
      onMouseEnter={handleHover}
      onMouseLeave={() => {
        updateBoard(getInitialState());
        setIsHovering(false);
      }}
    >
      {isHovering && (
        <img
          className="bishop"
          alt="bishop"
          src="https://www.pngmart.com/files/13/Bishop-PNG-Clipart.png"
        />
      )}
    </div>
  );
}

export default Box;
