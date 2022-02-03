import { useState, useEffect } from "react";
import Block from "./Block";

const Board = ({ setResult, board, setBoard, playing, setPlaying }) => {
  useEffect(() => {
    const calculateWinner = () => {
      const winnerLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ];
      let isDraw = true;

      for (let i = 0; i < winnerLines.length; i++) {
        const [a, b, c] = winnerLines[i];
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
          return board[a];
        }
        // if there are some block still not filled => turn isDraw to false
        if (!board[a] || !board[b] || !board[c]) {
          isDraw = false;
        }
      }

      if (isDraw) return "draw";
      // no winner && isDraw==false => return null
      return null;
    };

    setResult(calculateWinner());
  }, [board]);
  return (
    <div className="board">
      {board.map((block, index) => (
        <Block
          key={index}
          block={block}
          setBoard={setBoard}
          index={index}
          playing={playing}
          setPlaying={setPlaying}
        />
      ))}
    </div>
  );
};

export default Board;
