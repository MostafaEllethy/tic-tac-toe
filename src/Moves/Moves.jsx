import { useState } from 'react';
import styles from './Moves.module.scss';

const Moves = ({ history, jumpTo, currentStep }) => {
    const defaultOrder = 'asc'
    const [order, setOrder] = useState(defaultOrder)
    const asc = order === defaultOrder
    const moves = asc ? history : history.slice(0).reverse()

    return <div>
        <label className={styles.order} htmlFor='order'>Order:</label>
        <select name='orderBy' onChange={(e) => setOrder(e.target.value)}>
            <option value={defaultOrder}>Ascending</option>
            <option value='desc'>Descending</option>
        </select>
        <ol reversed={!asc}>
            {moves.map((step, i) => {
                const move = asc ? i : (moves.length - i - 1)
                const desc = move ? `Go to move #${move} with location (${step.location[0]}, ${step.location[1]})` : 'Go to game start';
                return (
                    <li key={`History-${move}`}>
                        <button onClick={() => jumpTo(move)} className={(move === currentStep) ? styles.current : ''}>{desc}</button>
                    </li>
                )
            })}
        </ol>
    </div>
}

export default Moves