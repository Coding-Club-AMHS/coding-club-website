import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import FadeInText from '../components/FadeInText';

const AboutUs = () => {
    return (
        <div className={styles.container} id={styles.whoarewe}>
            <Head>
                <title>About Us</title>
            </Head>
            <main className={styles.main}>
                <Navbar isDark={true}/>
                <Container>
                    <Row className={styles.containerrow}>
                            <div className={styles.title}>
                            Who are we?
                            </div>
                            <Col className={styles.description}>
                                We are a welcoming team of students who wish to promote coding within the AMHS community.
                            </Col>
                    </Row>

                </Container>


            </main>
        </div>
    )
}
export default AboutUs;