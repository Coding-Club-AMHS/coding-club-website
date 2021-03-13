import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import FadeInText from '../components/FadeInText';


const ContactUs = () => {
    return (
        <div className={styles.container} id={styles.contactus}>
            <Head>
                <title>Contact Us</title>
            </Head>
            <main className={styles.main}>
                <Navbar isDark={false} />
                <Container>
                    <FadeInText>
                        <Row className={styles.containerrow}>
                            <div className={styles.title}>
                                Contact Us
                            </div>
                            <div className={styles.description}>
                                We are just a click away, so feel free to reach us whenever!
                            </div>
                        </Row>
                    </FadeInText>

                </Container>

            </main>
        </div>
    )
}

export default ContactUs;