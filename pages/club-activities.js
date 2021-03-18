import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import NextButton from '../components/NextButton';

const ClubActivities = () => {
    return (
        <div className={styles.container} id={styles.clubactivities}>
            <Head>
                <title>Club Activities</title>
            </Head>
            <main className={styles.main}>
                <Navbar isDark={true} />
            </main>
            <div className={styles.nextbutton}>
                <NextButton id={styles.left} before='/about-us' />
                <NextButton id={styles.right} after='/current-project' />
            </div>
        </div>
    )
}

export default ClubActivities;