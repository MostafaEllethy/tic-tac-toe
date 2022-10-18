import { memo } from "react";

const Status = ({ winner, xIsNext, currentStep }) => {
  const Player = () => (
    <strong
      className={`text-4xl ${
        winner ? "text-[gold]" : xIsNext ? "text-lime-400" : "text-red-400"
      }`}
    >
      {winner ? winner : xIsNext ? "X" : "O"}
    </strong>
  );

  let status = <>Next player {<Player />}</>;

  if (winner) {
    status = <>🎉 Winner is {<Player />}</>;
  } else if (!winner && currentStep === 9) {
    status = <span className="text-cyan-500">Draw</span>;
  }

  return (
    <p className="h-9 font-fuzzy flex items-center gap-2 text-2xl">
      {status}
    </p>
  );
};

export default memo(Status);
