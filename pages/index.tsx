import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { BarberServiceDto, getBarberServices } from '../api/api';
import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PopularServices from '../components/PopularServices';
import styles from './index.module.css';

interface HomePageProps {
  barberServices: BarberServiceDto[];
}

const Home: NextPage<HomePageProps> = ({ barberServices }) => {
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
      <PopularServices barberServices={barberServices}></PopularServices>
      <Footer></Footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (context) => {
  const barberServices = await getBarberServices();

  return {
    props: {
      barberServices: barberServices,
    },
  };
};

export default Home;
