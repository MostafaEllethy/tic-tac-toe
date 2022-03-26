import Square from '../Square';
import styles from './Board.module.scss'
import PropTypes from 'prop-types'

const Board = ({ squares, handleClick, winnerLines }) => {

    function renderSquare(i) {
        return <Square value={squares[i]} onClick={() => handleClick(i)} key={`Square-${i}`} winner={(winnerLines && winnerLines.includes(i))} />;
    }

    let squaresIndex = 0

    return (
        <div>
            {Array.from({ length: 3 }, (o, r) => {
                let rowSquares = []
                for (let i = 0; i < 3; i++) {
                    rowSquares.push(renderSquare(squaresIndex))
                    squaresIndex++
                }
                return <div className={styles['board-row']} key={`Row-${r}`}>
                    {rowSquares}
                </div>
            })}
        </div>
    );
}

export default Board

Board.propTypes = {
    squares: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
    winnerLines: PropTypes.array
}