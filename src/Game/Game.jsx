import Moves from '../Moves';
import Board from '../Board';
import Status from '../Status';
import { useState } from 'react';
import { calculateWinner } from '../helper';
import styles from './Game.module.scss';

const initState = { history: [{ squares: Array(9).fill(null), location: null }], xIsNext: true, winner: null, stepNumber: 0 }

const Game = () => {
  const [state, setState] = useState(initState)
  const { history, xIsNext, winner, stepNumber } = state;
  const current = history[stepNumber]

  function handleClick(i) {
    setState(state => {
      const { xIsNext, winner, stepNumber } = state
      const history = state.history.slice(0, stepNumber + 1)
      if (winner) return state;
      const current = history[history.length - 1]
      const newSquares = [...current.squares];
      newSquares[i] = xIsNext ? 'X' : 'O';
      return { history: history.concat([{ squares: newSquares, location: [parseInt(i / 3), i % 3] }]), winner: calculateWinner(newSquares), xIsNext: !xIsNext, stepNumber: history.length }
    })
  }

  function jumpTo(step) {
    setState(state => ({
      ...state,
      winner: calculateWinner(state.history[step].squares),
      stepNumber: step,
      xIsNext: (step % 2) === 0
    }))
  }

  return (
    <div className={styles['game']}>
      <div>
        <button className={styles['new-game']} onClick={() => setState(initState)}>New Game</button>
        <Board squares={current.squares} handleClick={handleClick} winnerLines={winner?.[1]} />
      </div>
      <div className={styles['game-info']}>
        <Status winner={winner?.[0]} xIsNext={xIsNext} currentStep={stepNumber} />
        <Moves history={history} jumpTo={jumpTo} currentStep={stepNumber} />
      </div>
    </div>
  );
}

export default Game;
