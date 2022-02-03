import { AiOutlineClose } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";
import { Action } from "../reducerType";

const Block = ({ block, index, gameDispatch, gameState }) => {
  const handleOnclick = () => {
    if (block) {
      return;
    } else {
      gameDispatch({
        type: Action.MOVE,
        payload: {
          board: gameState.board.map((status, i) =>
            index === i && !status ? gameState.playing : status
          ),
        },
      });
    }
  };

  return (
    <div
      className="block"
      style={{ cursor: block ? "" : "pointer" }}
      onClick={handleOnclick}
    >
      {block && (block === "player1" ? <BiCircle /> : <AiOutlineClose />)}
    </div>
  );
};

export default Block;
