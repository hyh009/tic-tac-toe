import { useState } from "react";
import {
  boy,
  cat,
  chicken,
  dog,
  girl,
  glasses,
  pig,
  santa,
  skeleton,
} from "../imgs";

const Pop = ({ player1, player2, setPlayer1, setPlayer2, setPop }) => {
  const images = [boy, cat, chicken, dog, girl, glasses, pig, santa, skeleton];

  return (
    <div className="pop">
      <div className="chooseContainer">
        {player1?.src ? (
          <div className="playerConfirmContainer">
            <div className="imageBigContainer">
              <img className="playerImg" src={player1?.src} alt="player1" />
            </div>
            <input
              className="inputName"
              name="name"
              type="text"
              placeholder="請輸入玩家1名稱"
              value={player1?.name}
              onChange={(e) =>
                setPlayer1((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <button
              className="chooseAgainBtn blue"
              onClick={(e) => {
                e.preventDefault();
                setPlayer1((prev) => ({ ...prev, src: "" }));
              }}
            >
              重新選擇
            </button>
          </div>
        ) : (
          images.map((Image, index) => (
            <div key={index} className="playerContainer blueHover">
              <img
                className="player"
                src={Image}
                alt={`player${index}`}
                key={index}
                onClick={(e) => {
                  setPlayer1((prev) => ({
                    ...prev,
                    src: e.target?.src,
                  }));
                }}
              />
            </div>
          ))
        )}
      </div>
      <div className="textContainer">
        <span className="title">
          {!player1?.src || !player2?.src ? "請選擇角色" : ""}
        </span>
        {player1?.src && player2?.src && (
          <button
            className="startBtn"
            onClick={(e) => {
              e.preventDefault();
              setPop(false);
            }}
          >
            開始遊戲
          </button>
        )}
      </div>
      <div className="chooseContainer">
        {player2?.src ? (
          <div className="playerConfirmContainer">
            <div className="imageBigContainer">
              <img className="playerImg" src={player2?.src} alt="player2" />
            </div>
            <input
              className="inputName"
              name="player2"
              type="text"
              placeholder="請輸入玩家2名稱"
              value={player2?.name}
              onChange={(e) =>
                setPlayer2((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <button
              className="chooseAgainBtn green"
              onClick={(e) => {
                e.preventDefault();
                setPlayer2((prev) => ({ ...prev, src: null }));
              }}
            >
              重新選擇
            </button>
          </div>
        ) : (
          images.map((Image, index) => (
            <div key={index} className="playerContainer greenHover">
              <img
                className="player"
                src={Image}
                alt={`player${index}`}
                onClick={(e) => {
                  setPlayer2((prev) => ({
                    ...prev,
                    src: e.target.src,
                  }));
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Pop;
