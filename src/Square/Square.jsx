import { memo } from "react";
import styles from './Square.module.scss'
import PropTypes from 'prop-types'

const Square = ({ value, onClick, winner }) => {
    return (
        <button
            className={`${styles.square}${winner ? ' winner' : ''}`}
            onClick={() => (value === null) && onClick()}>
            {value}
        </button>
    );
}

export default memo(Square, (prev, current) => prev.value === current.value && prev.winner === current.winner)

Square.propTypes = {
    value: PropTypes.oneOf(['X', 'O', null]),
    onClick: PropTypes.func.isRequired,
    winner: PropTypes.bool
}