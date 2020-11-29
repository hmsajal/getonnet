import React from 'react'

import Board from './common/board'
import Tag from './common/tag'
import styles from './itemCard.module.css'
import img from '../assests/cone.png'

const ItemCard = () => {
    return (
        <Board boardStyle={styles.main} >
            <div className={styles.photo}>
                <img alt="cone" src={img} style={{ borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }} />
            </div>
            <div className={styles.title}>
                Waffle Cone
            </div>
            <div className={styles.subtitle}>
                12-Pack Box
            </div>
            <Tag />
            <div className={styles.plusMinus}>
                <div className={styles.minus}>&#8722;</div>
                <span className={styles.count}>2</span>
                <div className={styles.plus}>&#43;</div>
            </div>

        </Board>
    )
}

export default ItemCard
