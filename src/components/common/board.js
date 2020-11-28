import React from 'react'
import classNames from 'classnames'

import styles from './board.module.css'

const Board = ({ boardStyle, children }) => {
    return (
        <div className={classNames(boardStyle, styles.main)}
        >
            {children}
        </div>
    )
}

export default Board
