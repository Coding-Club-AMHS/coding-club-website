import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {CSSTransition} from 'react-transition-group';
import Container from 'react-bootstrap/Container';
import React from 'react';

import IntroScreen from '../components/IntroScreen';
import HomePageScreen from '../components/HomePageScreen';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasFinishedLoading: false};
    this.handleAdd = this.handleAdd.bind(this);
  }

  static getInitialProps() {
    return {};
  }

  handleAdd() {

  }

  handleRemove(i) {

  }



  render() {
    const {hasFinishedLoading} = this.state;
    return (
      <div className={styles.container} id={hasFinishedLoading ? null : styles.unloaded} onClick={() => this.setState({hasFinishedLoading: true})}>
        {/*Changes background colour*/}
        <Head>
          <title>Coding Club AMHS</title>
        </Head>
  
        <main className={styles.main}>
            {/* loads initial screen */} 
            {hasFinishedLoading ? <HomePageScreen /> : <IntroScreen />}
        </main>
      </div>
    )
  }
  
}
