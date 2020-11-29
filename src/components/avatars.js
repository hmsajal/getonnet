import React from 'react'

import Board from './common/board'
import AvatarItem from './common/avatarItem'
import styles from './avatars.module.css'
import img1 from '../assests/people1.png'
import img2 from '../assests/people2.png'
import img3 from '../assests/people3.png'
import img4 from '../assests/people4.png'

const Avatars = () => {
    return (
        <Board boardStyle={styles.main} >
            <AvatarItem avatarStyle={styles.avatar1} photo={img1} />
            <AvatarItem avatarStyle={styles.avatar2} photo={img2} />
            <AvatarItem avatarStyle={styles.avatar3} photo={img3} />
            <AvatarItem avatarStyle={styles.avatar4} photo={img4} />
        </Board>
    )
}

export default Avatars
