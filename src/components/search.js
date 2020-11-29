import React from 'react'
import Board from './common/board'
import ConfigIcon from '../assests/icons/configIcon'
import SearchIcon from '../assests/icons/searchIcon'

import styles from './search.module.css'

const Search = () => {
    return (
        <Board boardStyle={styles.main} >
            <input type="text" className={styles.searchBox} />
            <div className={styles.searchIcon}>
                <SearchIcon />
            </div>
            <div className={styles.searchSetBtn}>
                <ConfigIcon />
            </div>
        </Board>
    )
}

export default Search
