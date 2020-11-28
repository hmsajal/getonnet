import React from 'react'

import styles from './button.module.css'
import classNames from 'classnames'

const Button = ({ btnText, btnStyle, colorBtn }) => {

    let btnBackground = colorBtn ? '#5f2eea' : '#fff'
    let btnColor = colorBtn ? '#fff' : '#5f2eea'

    return (
        <button style={{ background: btnBackground, color: btnColor }} className={classNames(styles.btn, btnStyle)} >
            { btnText}
        </button >
    )
}

export default Button
