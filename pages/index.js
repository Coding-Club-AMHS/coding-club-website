import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {StyledHeading} from '../components/Heading.styled'

import Container from 'react-bootstrap/Container';
import React from 'react';
import IntroScreen from '../components/IntroScreen';

export default class Home extends React.Component {

  state = {
    hasFinishedLoading: false
  };

  static getInitialProps() {
    return {};
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>tttttttttttttttttttttttttttttttttt</title>
        </Head>
  
        <main className={styles.main}>
          <IntroScreen />
        </main>
  
        <footer className={styles.footer}>
  
        </footer>
      </div>
    )
  }
  
}
