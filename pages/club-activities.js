import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import NextButton from '../components/NextButton';
import FadeInText from '../components/FadeInText'


const ClubActivities = () => {
    return (
        <div className={styles.container} id={styles.clubactivities}>
            <Head>
                <title>Club Activities</title>
            </Head>
            <main className={styles.main}>
                <Navbar isDark={false} />
                <Container>
                    <FadeInText>
                        <Row className={styles.containerrow}>
                            <div className={styles.title}>
                                Our Club Activities
                            </div>
                            <div className={styles.description}>
                                project description here
                            </div>
                        </Row>
                    </FadeInText>
                </Container>
            </main>
            <div className={styles.nextbutton}>
                <NextButton id={styles.left} isDark={true} before='/about-us' />
                <NextButton id={styles.right} isDark={true} after='/current-project' />
            </div>
        </div>
    )
}

export default ClubActivities;