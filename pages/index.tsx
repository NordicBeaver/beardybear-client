import type { NextPage } from 'next';
import Head from 'next/head';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PopularServices from '../components/PopularServices';
import styles from './index.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Beardybear</title>
        <meta name="description" content="BeardyBear barbershop." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <PopularServices></PopularServices>
      <Footer></Footer>
    </div>
  );
};

export default Home;
