import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import FadeInText from '../components/FadeInText';
import StyledLink from '../components/Link.styled';
import NextButton from '../components/NextButton';

const Home = () => {
  return (
    <div className={styles.container} id={styles.home}>
      <Head>
        <title>Coding Club AMHS</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <Navbar isDark={false} />
        {/* loads initial screen */}

        <Container>
          <FadeInText>
            <Row className={styles.containerrow}>
              <div className={styles.title}>
                Welcome!
              </div>
            </Row>
          </FadeInText>
          <FadeInText>
            <Row> 
              <div className={styles.description}>
                ...to the official Coding Club at Alexander Mackenzie High School! We are a team of passionate coders of various levels wishing to create an engaging coding community.
              </div>
              <div className={styles.subtitle}>
                <StyledLink href='/contact-us' >Interested in joining? Check out these links!</StyledLink>
              </div>
            </Row>

          </FadeInText>
        </Container>
      </main>
      <div className={styles.nextbutton}>
        <NextButton id={styles.right} after='/about-us' isDark={true} />
      </div>
    </div>
  )
}

export default Home;