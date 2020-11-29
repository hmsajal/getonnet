import React from 'react'

import TagIcon from '../../assests/icons/tagIcon'
import styles from './tag.module.css'

const Tag = () => {
    return (
        <div className={styles.tagWrapper}>
            <div className={styles.tag}>
                <div className={styles.tagIcon}>
                    <TagIcon />
                </div>
                <div className={styles.tagText}>
                    Desert
                    </div>
            </div>
        </div>
    )
}

export default Tag
