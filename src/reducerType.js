// for auto complete
export const Action = {
  CONFIRM_ROLE1: "role1",
  CONFIRM_ROLE2: "role2",
  GAME_START: "gameStart",
  MOVE: "move",
  GAME_RESULT: "gameResult",
  GAME_RESTART: "gameRestart",
  GAME_CONTINUE: "gameContinue",
};

// useReducer function
export const gameReducer = (state, action) => {
  switch (action.type) {
    case Action.CONFIRM_ROLE1:
      return {
        ...state,
        player1: {
          ...state.player1,
          src:
            action.payload.col === "src"
              ? action.payload.src
              : state.player1.src,
          name:
            action.payload.col === "name"
              ? action.payload.name
              : state.player1.name,
        },
      };
    case Action.CONFIRM_ROLE2:
      return {
        ...state,
        player2: {
          ...state.player2,
          src:
            action.payload.col === "src"
              ? action.payload.src
              : state.player2.src,
          name:
            action.payload.col === "name"
              ? action.payload.name
              : state.player2.name,
        },
      };
    case Action.GAME_START:
      return {
        ...state,
        start: true,
      };
    case Action.MOVE:
      return {
        ...state,
        board: action.payload.board,
        playing: state.playing === "player1" ? "player2" : "player1",
      };
    case Action.GAME_RESULT:
      if (action.payload.result !== "draw") {
        return {
          ...state,
          result: action.payload.result,
          // add score
          [action.payload.result]: {
            ...state[action.payload.result],
            score: state[action.payload.result]?.score + 1,
          },
        };
      } else {
        // if draw only change result
        return {
          ...state,
          result: action.payload.result,
        };
      }
    case Action.GAME_RESTART:
      return {
        player1: { src: "", name: "", score: 0, title: "player1" },
        player2: { src: "", name: "", score: 0, title: "player2" },
        playing: "player1",
        result: null,
        board: ["", "", "", "", "", "", "", "", ""],
        start: false,
      };

    case Action.GAME_CONTINUE:
      return {
        ...state,
        playing: "player1",
        result: null,
        board: ["", "", "", "", "", "", "", "", ""],
      };

    default:
      throw new Error(`${action.type} method is not exist`);
  }
};
