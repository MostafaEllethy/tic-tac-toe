import { memo } from "react";
import PropTypes from "prop-types";

const Square = ({ value, onClick, winner }) => {
  let color;

  if (value === "X") color = "text-lime-400";
  if (value === "O") color = "text-red-400";
  if (winner) color = "text-[gold]";

  return (
    <button
      aria-label="Game Square"
      className={`inline-flex justify-center items-center text-7xl font-bold pt-4 font-fuzzy ${color}`}
      onClick={() => value === null && onClick()}
    >
      {value}
    </button>
  );
};

export default memo(
  Square,
  (prev, current) =>
    prev.value === current.value && prev.winner === current.winner
);

Square.propTypes = {
  value: PropTypes.oneOf(["X", "O", null]),
  onClick: PropTypes.func.isRequired,
  winner: PropTypes.bool,
};
