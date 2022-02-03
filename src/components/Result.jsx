import React from "react";
import { Action } from "../reducerType";
import Firework from "./Firework";

const Result = ({ gameDispatch, gameState }) => {
  const handleRestart = (e) => {
    e.preventDefault();
    gameDispatch({ type: Action.GAME_RESTART });
  };

  const handleAgain = (e) => {
    e.preventDefault();
    gameDispatch({ type: Action.GAME_CONTINUE });
  };
  return (
    <div className="gameEndContainer">
      {gameState.result !== "draw" && <Firework n="1" size="1.5" />}
      {gameState.result !== "draw" && <Firework n="2" size="2" />}
      <div className="resultContainer">
        {gameState.result && gameState.result !== "draw" && (
          <span className="resultTitle">Winner</span>
        )}
        {gameState.result === "player1" && (
          <div className="winner">
            <img
              src={gameState.player1.src}
              alt="winner"
              className="winnerImg"
            />
            <span className="winnerName">
              {gameState.player1.name ? gameState.player1.name : "玩家1"}
            </span>
          </div>
        )}
        {gameState.result === "player2" && (
          <div className="winner">
            <img
              src={gameState.player2.src}
              alt="winner"
              className="winnerImg"
            />
            <span className="winnerName">
              {gameState.player2.name ? gameState.player2.name : "玩家2"}
            </span>
          </div>
        )}
        {gameState.result === "draw" && (
          <div className="drawContainer">
            <span className="drawText">本局不分勝負</span>
            <div className="drawImgContainer">
              <img
                className="drawImg"
                src={gameState.player1.src}
                alt="玩家1"
              />
              <img
                className="drawImg"
                src={gameState.player2.src}
                alt="玩家2"
              />
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
