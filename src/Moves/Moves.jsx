import { useState } from "react";

const Moves = ({ history, jumpTo, currentStep }) => {
  const defaultOrder = "asc";
  const [order, setOrder] = useState(defaultOrder);
  const asc = order === defaultOrder;
  const moves = asc ? history : history.slice(0).reverse();

  return (
    <section className="w-72">
      <div className="mb-1 flex gap-1 items-center">
        <label className="text-sm" htmlFor="order">
          Sort by:
        </label>
        <select
          className="border px-2 py-1"
          name="orderBy"
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value={defaultOrder}>Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <ol reversed={!asc} className="pl-3">
        {moves.map((step, i) => {
          const move = asc ? i : moves.length - i - 1;
          const desc = move
            ? `Go to move #${move} with location (${step.location[0]}, ${step.location[1]})`
            : "Go to game start";
          return (
            <li key={`History-${move}`}>
              <button
                onClick={() => jumpTo(move)}
                className={`px-2 ${move === currentStep ? "font-bold" : ""}`}
              >
                - {desc}
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Moves;
