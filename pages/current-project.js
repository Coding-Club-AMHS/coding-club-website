import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import NextButton from '../components/NextButton';

const CurrentProject = () => {
    return (
        <div className={styles.container} id={styles.currentproject}>
            <Head>
                <title>Current Project</title>
            </Head>
            <main className={styles.main}>
                <Navbar isDark={true} />
            </main>
            <div className={styles.nextbutton}>
                <NextButton id={styles.left} before='/club-activities' />
                <NextButton id={styles.right} after='/contact-us' />
            </div>
        </div>
    )
}

export default CurrentProject;