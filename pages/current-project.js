import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import NextButton from '../components/NextButton';
import FadeInText from '../components/FadeInText'


const CurrentProject = () => {
    return (
        <div className={styles.container} id={styles.currentproject}>
            <Head>
                <title>Current Project</title>
            </Head>
            <main className={styles.main}>
                <Navbar isDark={true} />
                <Container>
                    <FadeInText>
                        <Row className={styles.containerrow}>
                            <div className={styles.title}>
                                Our Current Project
                            </div>
                            <div className={styles.description}>
                                project description here
                            </div>
                        </Row>
                    </FadeInText>
                </Container>

            </main>
            <div className={styles.nextbutton}>
                <NextButton id={styles.left} before='/club-activities' />
                <NextButton id={styles.right} after='/contact-us' />
            </div>
        </div>
    )
}

export default CurrentProject;