import { useState, useEffect, useReducer } from "react";
import Pop from "./components/Pop";
import Header from "./components/Header";
import Board from "./components/Board";
import Player from "./components/Player";
import Result from "./components/Result";
import { AiOutlineClose } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";
import "./styles/App.css";

const App = () => {
  const [player1, setPlayer1] = useState({
    src: "",
    name: "",
    score: 0,
    title: "player1",
  });
  const [player2, setPlayer2] = useState({
    src: "",
    name: "",
    score: 0,
    title: "player2",
  });
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [playing, setPlaying] = useState("player1");
  const [pop, setPop] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    // add score
    if (result) {
      if (result === "draw") {
      } else if (result === "player1") {
        setPlayer1((prev) => ({ ...prev, score: prev.score + 1 }));
      } else if (result === "player2") {
        setPlayer2((prev) => ({ ...prev, score: prev.score + 1 }));
      }
    }
  }, [result]);

  return (
    <div className="app">
      <Header player1={player1} player2={player2} />
      {pop ? (
        <Pop
          player1={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setPop={setPop}
        />
      ) : result ? (
        <Result
          result={result}
          setResult={setResult}
          player1={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setPop={setPop}
          setPlaying={setPlaying}
          setBoard={setBoard}
        />
      ) : (
        <div className="game">
          <Player
            player={player1}
            Icon={BiCircle}
            playing={playing}
            color="rgb(41, 147, 235)"
          />
          <Board
            setResult={setResult}
            setBoard={setBoard}
            board={board}
            playing={playing}
            setPlaying={setPlaying}
          />
          <Player
            player={player2}
            playing={playing}
            Icon={AiOutlineClose}
            color="rgb(31, 216, 170)"
          />
        </div>
      )}
    </div>
  );
};

export default App;
