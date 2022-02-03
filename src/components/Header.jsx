import React from "react";

const Header = ({ player1, player2, inputNames }) => {
  return (
    <div className="header">
      <div className="left">
        {player1?.src && (
          <img className="smallImg" src={player1?.src} alt="player1" />
        )}
        <span className="playerName">
          {player1?.name ? player1?.name : "玩家1"}
        </span>
      </div>
      <div className="middle">
        <span className="middleText">{player1.score}</span>
        <span className="middleText">V.S</span>
        <span className="middleText">{player2.score}</span>
      </div>
      <div className="right">
        <span className="playerName">
          {player2?.name ? player2?.name : "玩家2"}
        </span>
        {player2?.src && (
          <img className="smallImg" src={player2?.src} alt="player2" />
        )}
      </div>
    </div>
  );
};

export default Header;
