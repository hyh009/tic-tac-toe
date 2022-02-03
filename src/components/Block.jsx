import { AiOutlineClose } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";

const Block = ({ setBoard, block, index, playing, setPlaying }) => {
  const handleOnclick = () => {
    if (block) {
      return;
    } else {
      setBoard((prev) =>
        prev.map((status, i) => (index === i && !status ? playing : status))
      );
      setPlaying((prev) => (prev === "player1" ? "player2" : "player1"));
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
