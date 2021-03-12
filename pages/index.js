import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import Navbar from '../components/Navbar';
import IntroScreen from '../components/IntroScreen';

const DefaultHome = () => {
    return (
      <div className={styles.container} id={styles.unloaded} onClick={() => window.location='/home'}>
        {/*Changes background colour*/}
        <Head>
          <title>Coding Club AMHS</title>
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
  
        <main className={styles.main}>
            <Navbar isDark={true}/>
            {/* loads initial screen */} 
            <IntroScreen />
        </main>
      </div>
    )
}

export default DefaultHome;