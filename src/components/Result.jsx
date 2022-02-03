import React from "react";
import Firework from "./Firework";

const Result = ({
  result,
  setResult,
  player1,
  player2,
  setPlayer1,
  setPlayer2,
  setPop,
  setBoard,
  setPlaying,
}) => {
  const handleRestart = (e) => {
    e.preventDefault();
    setPlayer1({ src: "", name: "", score: 0, title: "player1" });
    setPlayer2({ src: "", name: "", score: 0, title: "player2" });
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setResult(null);
    setPop(true);
  };

  const handleAgain = (e) => {
    e.preventDefault();
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setResult(null);
    setPlaying("player1");
  };
  return (
    <div className="gameEndContainer">
      {result !== "draw" && <Firework n="1" size="1.5" />}
      {result !== "draw" && <Firework n="2" size="2" />}
      <div className="resultContainer">
        {result && result !== "draw" && (
          <span className="resultTitle">Winner</span>
        )}
        {result === "player1" && (
          <div className="winner">
            <img src={player1.src} alt="winner" className="winnerImg" />
            <span className="winnerName">
              {player1.name ? player1.name : "玩家1"}
            </span>
          </div>
        )}
        {result === "player2" && (
          <div className="winner">
            <img src={player2.src} alt="winner" className="winnerImg" />
            <span className="winnerName">
              {player2.name ? player2.name : "玩家2"}
            </span>
          </div>
        )}
        {result === "draw" && (
          <div className="drawContainer">
            <span className="drawText">本局不分勝負</span>
            <div className="drawImgContainer">
              <img className="drawImg" src={player1.src} alt="玩家1" />
              <img className="drawImg" src={player2.src} alt="玩家2" />
            </div>
          </div>
        )}

        <div className="resultBtnContainer">
          <button className="resultBtn" onClick={handleRestart}>
            重選角色
          </button>
          <button className="resultBtn" onClick={handleAgain}>
            再來一局
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
