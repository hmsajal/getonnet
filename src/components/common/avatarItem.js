import React from 'react'


import styles from './avatarItem.module.css'

const AvatarItem = ({ avatarStyle, photo }) => {

    return (
        <div className={avatarStyle} >
            <img alt="avatar" src={photo} className={styles.mask} />
        </div>
    )
}

export default AvatarItem
