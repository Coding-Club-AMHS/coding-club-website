import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {StyledHeading} from '../components/Heading.styled'
import AnimatedEllipses from '../components/AnimatedEllipses'

import Container from 'react-bootstrap/Container';
import React from 'react';

export default class Home extends React.Component {
  
  static getInitialProps() {
    return {};
  }

  
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Coding Club AMHS</title>
        </Head>
  
        <main className={styles.main}>
          <StyledHeading>
            <div className="top">
              <AnimatedEllipses/>
            </div>
            <div className="clicktext">
              {"> click anywhere to continue <"}
            </div>
          </StyledHeading>
        </main>
  
        <footer className={styles.footer}>
  
        </footer>
      </div>
    )
  }
  
}
