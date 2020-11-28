import React from 'react'
import classNames from 'classnames'


import CloseIcon from '../../assests/icons/closeIcon'
import MailIcon from '../../assests/icons/mailIcon'
import PassIcon from '../../assests/icons/passwordIcon'

import styles from './input.module.css'

const Input = ({ inputType, icon, pholder, inputStyle }) => {
    return (
        <div className={styles.main}>
            <label className={styles.label} inputType={inputType} >
                {icon === 'mail' ? <MailIcon /> : (icon === "password" ? <PassIcon /> : null)}
            </label>
            <input className={classNames(styles.input, inputStyle)} type={inputType} placeholder={pholder} />
            <span className={styles.icnClose} inputType={inputType}>
                <CloseIcon />
            </span>
        </div>
    )
}

export default Input
