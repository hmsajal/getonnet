import React from 'react'

import Board from './common/board'
import Button from './common/button'
import styles from './saleCard.module.css'

const SaleCard = () => {

    return (
        <Board boardStyle={styles.main}>
            <div className={styles.title}>Summer Sale</div>
            <p className={styles.desc}>25% Off Now through sunday for all in-store purchases.</p>
            <div alt="olive leaves" className={styles.photo}></div>
            <Button btnText="Shop Now" btnStyle={styles.button} />
        </Board>
    )
}

export default SaleCard
