import React from "react";
import Login from './components/login'
import Sale from './components/saleCard'
import JoinMail from './components/joinMail'
import PressIcons from './components/pressIcons'
import Search from './components/search'
import Selection from './components/selection'
import AuthButtons from './components/authButtons'
import WatchCard from './components/watchCard'
import Avatars from './components/avatars'
import ItemCard from './components/itemCard'

import styles from './app.module.css'

function App() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Example Widgets</h1>
      <Login />
      <Sale />
      <JoinMail />
      <PressIcons />
      <Search />
      <Selection />
      <AuthButtons />
      <WatchCard />
      <Avatars />
      <ItemCard />
    </div>
  );
}

export default App;
