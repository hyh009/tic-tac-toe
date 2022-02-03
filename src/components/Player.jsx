import React from "react";

const Player = ({ player, Icon, color, playing }) => {
  return (
    <div className="sideContainer">
      <div className="playerIconContainer">
        <Icon style={{ color: color }} />
      </div>
      <img className="sideImage" src={player.src} alt="玩家圖示" />
      {player.title === "player1" && (
        <div className={`turn ${playing === "player1" && "blue"}`}>
          {playing === "player1" && `輪到${player.name || "玩家1"}`}
        </div>
      )}

      {player.title === "player2" && (
        <div className={`turn ${playing === "player2" && "green"}`}>
          {playing === "player2" && `輪到${player.name || "玩家2"}`}
        </div>
      )}
    </div>
  );
};

export default Player;
