import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import styles from './index.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beardybear</title>
        <meta name="description" content="BeardyBear barbershop." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <h1>BeardyBear</h1>
    </div>
  );
};

export default Home;
