import React from 'react'
import Board from './common/board'
import Button from './common/button'

import styles from './watchCard.module.css'

const WatchCard = () => {
    return (
        <Board boardStyle={styles.main} >
            <div className={styles.title}>$ 370,345</div>
            <div className={styles.addition}>+126</div>
            <div className={styles.desc}>This month</div>
            <Button btnStyle={styles.button} btnText="Watch" />
        </Board>
    )
}

export default WatchCard
