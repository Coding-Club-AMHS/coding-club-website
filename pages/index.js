import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import Navbar from '../components/Navbar';
import IntroScreen from '../components/IntroScreen';

const DefaultHome = () => {
  return (
    <div className={styles.container} id={styles.unloaded}>
      {/*Changes background colour*/}
      <Head>
        <title>Coding Club AMHS</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Navbar isDark={true} />
        {/* loads initial screen */}
        <div onClick={() => window.location = '/home'}>
          <IntroScreen />
        </div>
      </main>
    </div>
  )
}

export default DefaultHome;