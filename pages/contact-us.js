import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import FadeInText from '../components/FadeInText';
import WhiteButton from '../components/WhiteButton';

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
                    <FadeInText>
                        <Row className={styles.containerrow}>
                            <section className={styles.containercol}>
                                <div className={styles.subtitle}>
                                    Our socials:
                                </div>
                                <div className={styles.buttonlist}>
                                    <WhiteButton onClick={() => window.open('https://classroom.google.com/c/MjE3MjE0MjgyMDc4?cjc=ieqmyxg')} text="Join our Google Classroom"/>
                                    <WhiteButton onClick={() => window.open('https://discord.gg/bAeK5aBTAr')} text="Join our Discord server"/>
                                    <WhiteButton onClick={() => window.open('https://www.instagram.com/coding_club_amhs/')} text="Follow our instagram account"/>
                                    <WhiteButton onClick={() => window.open('https://github.com/Coding-Club-AMHS/')} text="Check out our GitHub organization"/>
                                </div>
                            </section>
                        </Row>
                    </FadeInText>
                </Container>

            </main>
        </div>
    )
}

export default ContactUs;