import React from 'react'

import TextBoxIcon from '../assests/icons/textboxicon'
import Board from './common/board'

import styles from './selection.module.css'

const Selection = () => {

    const items = ['vegetables', 'turnips', 'squash', 'brocolli', 'spinach']
    return (
        <Board boardStyle={styles.main} >
            <div className={styles.selected}>
                Selected
            </div>
            <div className={styles.selectIcon}>
                &#x2022;
            </div>
            <div className={styles.unselected}>
                Unselected
            </div>
            <label className={styles.label}>Share a reply</label>
            <input type="text" className={styles.text} />
            <div className={styles.textboxicon}>
                <TextBoxIcon />
            </div>
            <select className={styles.vegSelect} name="abc">
                {items.map((item, index) => {
                    return (<option key={index} className={styles.option} value={item}>{item}</option>)
                })}
            </select>
        </Board>
    )
}

export default Selection
