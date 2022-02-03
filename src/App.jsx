import { useReducer } from "react";
import Pop from "./components/Pop";
import Header from "./components/Header";
import Board from "./components/Board";
import Player from "./components/Player";
import Result from "./components/Result";
import { AiOutlineClose } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";
import "./styles/App.css";
import { gameReducer } from "./reducerType";

const App = () => {
  const initialGame = {
    player1: { src: "", name: "", score: 0, title: "player1" },
    player2: { src: "", name: "", score: 0, title: "player2" },
    playing: "player1",
    result: null,
    board: ["", "", "", "", "", "", "", "", ""],
    start: false,
  };

  const [gameState, gameDispatch] = useReducer(gameReducer, initialGame);

  return (
    <div className="app">
      <Header gameState={gameState} />
      {!gameState.start ? (
        <Pop gameDispatch={gameDispatch} gameState={gameState} />
      ) : gameState.result ? (
        <Result gameDispatch={gameDispatch} gameState={gameState} />
      ) : (
        <div className="game">
          <Player
            player={gameState.player1}
            playing={gameState.playing}
            Icon={BiCircle}
            color="rgb(41, 147, 235)"
          />
          <Board gameDispatch={gameDispatch} gameState={gameState} />
          <Player
            player={gameState.player2}
            playing={gameState.playing}
            Icon={AiOutlineClose}
            color="rgb(31, 216, 170)"
          />
        </div>
      )}
    </div>
  );
};

export default App;
