import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Navbar from '../../../../../../../../../../../components/Navbar';
import styles from '../../../../../../../../../../../styles/Home.module.css';
import NextButton from '../../../../../../../../../../../components/NextButton';
import FadeInText from '../../../../../../../../../../../components/FadeInText'


const CurrentProject = () => {
    return (
        <div className={styles.container} id={styles.secretpage}>
            <Head>
                <title>Secret Page</title>
            </Head>
            <main className={styles.main}>
                <Container>
                    <FadeInText>
                        <Row className={styles.containerrow}>
                            <div className={styles.title}>
                                Congratulations for finding this page
                            </div>
                            <div className={styles.description}>
                                this is why you dont trust ib kids with css
                            </div>
                        </Row>
                    </FadeInText>
                </Container>

            </main>

        </div>
    )
}

export default CurrentProject;