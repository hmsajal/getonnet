import React from 'react'

import Board from './common/board'
import Input from './common/input'
import Button from './common/button'
import styles from './login.module.css'

const Login = () => {
    return (
        <Board boardStyle={styles.main}>
            <div className={styles.name}>Login</div>
            <Input inputType="email" icon="mail" pholder="Email" inputStyle={styles.email} />
            <Input inputType="password" icon="password" pholder="Password" inputStyle={styles.password} />
            <Button colorBtn btnStyle={styles.submit} btnText="Login" />
        </Board>
    )
}

export default Login
