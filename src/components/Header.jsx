import React from "react";

const Header = ({ gameState }) => {
  return (
    <div className="header">
      <div className="left">
        {gameState.player1?.src && (
          <img
            className="smallImg"
            src={gameState.player1?.src}
            alt="player1"
          />
        )}
        <span className="playerName">
          {gameState.player1?.name ? gameState.player1?.name : "玩家1"}
        </span>
      </div>
      <div className="middle">
        <span className="middleText">{gameState.player1.score}</span>
        <span className="middleText">V.S</span>
        <span className="middleText">{gameState.player2.score}</span>
      </div>
      <div className="right">
        <span className="playerName">
          {gameState.player2?.name ? gameState.player2?.name : "玩家2"}
        </span>
        {gameState.player2?.src && (
          <img
            className="smallImg"
            src={gameState.player2?.src}
            alt="player2"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
