import React from 'react'

import Board from './common/board'
import Button from './common/button'
import styles from './authButtons.module.css'

const AuthButtons = () => {
    return (
        <Board boardStyle={styles.main} >
            <Button colorBtn btnStyle={styles.leftBtn} btnText="Sign up" />
            <Button btnStyle={styles.rightBtn} btnText="Log in" />
        </Board>
    )
}

export default AuthButtons
