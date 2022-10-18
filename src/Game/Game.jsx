import Moves from "../Moves";
import Board from "../Board";
import Status from "../Status";
import { useCallback, useState } from "react";
import { calculateWinner } from "../helper";

const initState = {
  history: [{ squares: Array(9).fill(null), location: null }],
  xIsNext: true,
  winner: null,
  stepNumber: 0,
};

const Game = () => {
  const [state, setState] = useState(initState);
  const { history, xIsNext, winner, stepNumber } = state;
  const current = history[stepNumber];

  function handleClick(i) {
    setState((state) => {
      const { xIsNext, winner, stepNumber } = state;
      const history = state.history.slice(0, stepNumber + 1);
      if (winner) return state;
      const current = history[history.length - 1];
      const newSquares = [...current.squares];
      newSquares[i] = xIsNext ? "X" : "O";
      return {
        history: history.concat([
          { squares: newSquares, location: [parseInt(i / 3), i % 3] },
        ]),
        winner: calculateWinner(newSquares),
        xIsNext: !xIsNext,
        stepNumber: history.length,
      };
    });
  }

  const jumpTo = useCallback((step) => {
    setState((state) => ({
      ...state,
      winner: calculateWinner(state.history[step].squares),
      stepNumber: step,
      xIsNext: step % 2 === 0,
    }));
  }, []);

  return (
    <main className="py-5">
      <div
        className="flex justify-between items-center gap-12 mx-auto px-2 
      max-w-sm sm:max-w-2xl
      mb-7 sm:mb-20
      sm:mt-7
      "
      >
        <Status
          winner={winner?.[0]}
          xIsNext={xIsNext}
          currentStep={stepNumber}
        />

        <button
          onClick={() => setState(initState)}
          className="font-fuzzy font-bold text-lg border-dotted border-b-2 border-cyan-500"
        >
          New Game
        </button>
      </div>
      <div className="px-3 flex flex-wrap justify-center items-center sm:items-start gap-12 sm:gap-24">
        <Board
          squares={current.squares}
          handleClick={handleClick}
          winnerLines={winner?.[1]}
        />
        <Moves history={history} jumpTo={jumpTo} currentStep={stepNumber} />
      </div>
    </main>
  );
};

export default Game;
