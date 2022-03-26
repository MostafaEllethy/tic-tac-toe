import styles from './Status.module.scss'

const Status = ({ winner, xIsNext, currentStep }) => {
    let status = `Next player: ${xIsNext ? 'X' : 'O'}`

    if (winner) {
        status = `Winner: ${winner}`
    } else if (!winner && (currentStep === 9)) {
        status = 'Draw'
    }

    return <div className={styles.status}>{status}</div>
}

export default Status