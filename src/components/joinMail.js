import React from 'react'

import Board from './common/board'
import Input from './common/input'
import Button from './common/button'
import CloseIcon from '../assests/icons/closeIcon'
import styles from './joinMail.module.css'

const JoinMail = () => {
    return (
        <Board boardStyle={styles.main}>
            <div className={styles.closeIcon}>
                <CloseIcon />
            </div>
            <h2 className={styles.title}>
                Join our mailing list.
            </h2>
            <p className={styles.desc}>
                Recieve 15% off your order at checkout and save today!
            </p>
            <Input inputType="text" inputStyle={styles.input} pholder="Email Address" icon="mail" />
            <Button colorBtn btnText="&#x2192;" btnStyle={styles.button} />
        </Board>
    )
}

export default JoinMail
