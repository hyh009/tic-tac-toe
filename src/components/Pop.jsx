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
import { Action } from "../reducerType";

const Pop = ({ gameDispatch, gameState }) => {
  const images = [boy, cat, chicken, dog, girl, glasses, pig, santa, skeleton];

  // change player's image (remove, add)
  const handleImage = (e, role, method) => {
    if (method === "add") {
      if (role === "player1") {
        gameDispatch({
          type: Action.CONFIRM_ROLE1,
          payload: { col: "src", src: e.target.src },
        });
      } else if (role === "player2") {
        gameDispatch({
          type: Action.CONFIRM_ROLE2,
          payload: { col: "src", src: e.target.src },
        });
      }
    } else if (method === "remove") {
      if (role === "player1") {
        gameDispatch({
          type: Action.CONFIRM_ROLE1,
          payload: { col: "src", src: "" },
        });
      } else if (role === "player2") {
        gameDispatch({
          type: Action.CONFIRM_ROLE2,
          payload: { col: "src", src: "" },
        });
      }
    }
  };
  // change player's name
  const handleName = (e, role) => {
    if (role === "player1") {
      gameDispatch({
        type: Action.CONFIRM_ROLE1,
        payload: { col: "name", name: e.target.value },
      });
    } else if (role === "player2") {
      gameDispatch({
        type: Action.CONFIRM_ROLE2,
        payload: { col: "name", name: e.target.value },
      });
    }
  };

  const handleGameStart = () => {
    gameDispatch({ type: Action.GAME_START });
  };
  return (
    <div className="pop">
      <div className="chooseContainer">
        {gameState.player1?.src ? (
          <div className="playerConfirmContainer">
            <div className="imageBigContainer">
              <img
                className="playerImg"
                src={gameState.player1?.src}
                alt="player1"
              />
            </div>
            <input
              className="inputName"
              name="name"
              type="text"
              placeholder="???????????????1??????"
              value={gameState.player1?.name}
              onChange={(e) => handleName(e, "player1")}
            />
            <button
              className="chooseAgainBtn blue"
              onClick={(e) => {
                handleImage(e, "player1", "remove");
              }}
            >
              ????????????
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
                  handleImage(e, "player1", "add");
                }}
              />
            </div>
          ))
        )}
      </div>
      <div className="textContainer">
        <span className="title">
          {!gameState.player1?.src || !gameState.player2?.src
            ? "???????????????"
            : ""}
        </span>
        {gameState.player1?.src && gameState.player2?.src && (
          <button
            className="startBtn"
            onClick={(e) => {
              e.preventDefault();
              handleGameStart(e);
            }}
          >
            ????????????
          </button>
        )}
      </div>
      <div className="chooseContainer">
        {gameState.player2?.src ? (
          <div className="playerConfirmContainer">
            <div className="imageBigContainer">
              <img
                className="playerImg"
                src={gameState.player2?.src}
                alt="player2"
              />
            </div>
            <input
              className="inputName"
              name="player2"
              type="text"
              placeholder="???????????????2??????"
              value={gameState.player2?.name}
              onChange={(e) => handleName(e, "player2")}
            />
            <button
              className="chooseAgainBtn green"
              onClick={(e) => {
                handleImage(e, "player2", "remove");
              }}
            >
              ????????????
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
                  handleImage(e, "player2", "add");
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
