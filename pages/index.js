import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Club AMHS</title>
      </Head>

      <main className={styles.main}>
        <h1>Coding Club AMHS</h1>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
