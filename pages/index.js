import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import Navbar from '../components/Navbar';
import IntroScreen from '../components/IntroScreen';
import HomePageScreen from '../components/HomePageScreen';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasFinishedLoading: false};
  }

  static getInitialProps() {
    return {};
  }

  render() {
    const {hasFinishedLoading} = this.state;
    return (
      <div className={styles.container} id={hasFinishedLoading ? null : styles.unloaded} onClick={() => this.setState({hasFinishedLoading: true})}>
        {/*Changes background colour*/}
        <Head>
          <title>Coding Club AMHS</title>
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
  
        <main className={styles.main}>
            <Navbar />
            {/* loads initial screen */} 
            {hasFinishedLoading ? <HomePageScreen /> : <IntroScreen />}
        </main>
      </div>
    )
  }
  
}
