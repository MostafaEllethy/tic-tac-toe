import Square from "../Square";
import PropTypes from "prop-types";
import AnimatedLines from "./AnimatedLines";

const Board = ({ squares, handleClick, winnerLines }) => {
  return (
    <section className="w-72 h-72 relative overflow-hidden select-none">
      <AnimatedLines />
      <div className="absolute w-full h-full grid grid-cols-3 auto-rows-fr z-10">
        {squares.map((_, i) => (
          <Square
            value={squares[i]}
            onClick={() => handleClick(i)}
            key={`Square-${i}`}
            winner={winnerLines && winnerLines.includes(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Board;

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  winnerLines: PropTypes.array,
};
