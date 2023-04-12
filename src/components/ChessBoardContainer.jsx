import { useEffect, useState } from "react";
import Box from "./Box";
import { getInitialState } from "./utils";

function ChessBoardConatiner() {
  const [board, setBoard] = useState(getInitialState());
  useEffect(() => {
    console.log(board);
  }, [board]);

  return (
    <div className="grid">
      {board?.map((row) => {
        return (
          <div>
            {row?.map((col) => (
              <Box data={col} board={board} updateBoard={setBoard} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default ChessBoardConatiner;
