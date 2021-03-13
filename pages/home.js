import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, {useState,useContext} from 'react';
import Navbar from '../components/Navbar';
import HomePageScreen from '../components/HomePageScreen';
import NextButton from '../components/NextButton';

const Home = () => {
    return (
      <div className={styles.container} id={styles.home}>
        {/*Changes background colour*/}
        <Head>
          <title>Coding Club AMHS</title>
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
  
        <main className={styles.main}>
            <Navbar isDark={false}/>
            {/* loads initial screen */} 
            <HomePageScreen/>
        </main>
      </div>
    )
}

export default Home;