import React from 'react'
import Board from './common/board'

import styles from './pressIcons.module.css'

const PressIcons = () => {
    return (
        <Board boardStyle={styles.main} >
            <button className={styles.grayBtn} />
            <button className={styles.blueBtn}>&#10003;</button>
            <button className={styles.grayBtn2} />
            <button className={styles.blueBorderBtn} />
            <div className={styles.toggleOff}>
                <button className={styles.toggleBtnOff} />
            </div>
            <div className={styles.toggleOn}>
                <button className={styles.toggleBtnOn} />
            </div>
            <div className={styles.plusMinus}>
                <button className={styles.minusBtn}>&#8722;</button>
                <div className={styles.count}>1</div>
                <button className={styles.plusBtn}>&#43;</button>
            </div>
            <div className={styles.slider}>
                <div className={styles.sliderRect}>
                    <div className={styles.colorRect}></div>
                    <div className={styles.sliderBtnOuter}>
                        <div className={styles.sliderBtn}></div>
                    </div>

                </div>
            </div>
        </Board>
    )
}

export default PressIcons
