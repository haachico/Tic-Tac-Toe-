import { useState } from "react";

import Square from "./Square";
import { getWinner } from "../helper";

const Game = () => {
  const [squares, setSqures] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = getWinner(squares);

  const handleClick = (i) => {
    const squaresCopy = [...squares];

    //WRITTEN FIRST
    if (winner || squaresCopy[i]) return;
    //THEN THIS
    squaresCopy[i] = isXNext ? "X" : "O";
    setSqures(squaresCopy);
    setIsXNext((prevState) => !prevState);
  };

  const handleRestart = () => {
    setSqures(Array(9).fill(null));
  };
  return (
    <>
      <h1>Tic Tac Toe!</h1>
      <div className="board">
        {squares.map((square, i) => (
          <Square value={square} key={i} onClick={() => handleClick(i)} />
        ))}
      </div>
      <h2>
        {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`}
      </h2>
      <button
        onClick={() => handleRestart()}
        style={{
          cursor: "pointer",
          width: "6rem",
          height: "2rem",
          background: "darkBlue",
          color: "white"
        }}
      >
        Start again
      </button>
    </>
  );
};

export default Game;
