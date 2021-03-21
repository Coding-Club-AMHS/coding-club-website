import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import FadeInText from '../components/FadeInText';
import NextButton from '../components/NextButton';
import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className={styles.container} id={styles.whoarewe}>
            <Head>
                <title>About Us</title>
            </Head>
            <main className={styles.main}>
                <Navbar isDark={true} />
                <Container>
                    <FadeInText>
                        <Row className={styles.containerrow}>
                            <div className={styles.title}>
                                Who are we?
                            </div>
                            <div className={styles.description}>
                                We are a welcoming team of students who wish to promote coding within the AMHS community.
                            </div>
                        </Row>
                    </FadeInText>

                        <Row>
                            <FadeInText>
                            <div className={styles.title}>
                                Our goals
                            </div>
                            </FadeInText>
                            <ul className = {styles.bulletdescription}>
                                <FadeInText>
                                    <li>
                                    Create innovative and fun projects which can impact the school, the community and beyond
                                    </li>
                                </FadeInText>
                                <FadeInText>
                                    <li>
                                    Share and teach coding knowledge
                                    </li>
                                </FadeInText>
                                <FadeInText>
                                    <li>
                                    Prepare and practice for coding contests such as the CCC
                                    </li>
                                </FadeInText>
                            </ul>
                        </Row>

                    <FadeInText>
                        <Row>
                            <div className = {styles.title}>
                                Meet the team
                            </div>
                        </Row>
                    </FadeInText>

                    <FadeInText>
                        <Row>
                            <div className={styles.divpadding}>
                                <CardDeck>
                                    <Card bg='dark' border="danger" style={{ width: '20rem', height: '25rem'}}>
                                        <Card.Img variant="top" src='/hackerman.png'/>
                                        <Card.Body>
                                            <Card.Title>Laura Cao</Card.Title>
                                            <Card.Subtitle>Co-President</Card.Subtitle>
                                            <Card.Text>I'm a grade 12 IB student who loves everything math, coding, and art (except for graphic design)! You might see me around school painting questionable things for Ms. Hatzifotis.</Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card bg='dark' border="warning" style={{ width: '20rem', height: '25rem'}}>
                                    <Card.Img variant="top" src='/hackerman.png'/>
                                        <Card.Body>
                                            <Card.Title>Alex Motor</Card.Title>
                                            <Card.Subtitle>Co-President</Card.Subtitle>
                                            <Card.Text>Blurb</Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card bg='dark' border="success" style={{ width: '20rem', height: '25rem'}}>
                                    <Card.Img variant="top" src='/hackerman.png'/>
                                        <Card.Body>
                                            <Card.Title>Joyce Ye</Card.Title>
                                            <Card.Subtitle>Co-President</Card.Subtitle>
                                            <Card.Text>Hi! I'm also a senior year student finishing up the IB program!  My natural habitat is when I am able to listen to some KRnB music, while drawing random portraits of people I found on Pinterest.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardDeck>
                            </div>  
                        </Row>
                    </FadeInText>
                   
                </Container>
            </main>
            
            <div className={styles.nextbutton}>
                <NextButton id={styles.left} before='/home' />
                <NextButton id={styles.right} after='/club-activities' />
            </div>
        </div>
    )
}
export default AboutUs;
