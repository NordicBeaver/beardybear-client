import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { BarberServiceDto, getBarberServices } from '../api/api';
import BarberServicesList from '../components/BarberServicesList';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './services.module.css';

interface BarberServicesPageProps {
  barberServices: BarberServiceDto[];
}

const BarberServicesPage: NextPage<BarberServicesPageProps> = ({ barberServices }) => {
  return (
    <div className={styles.page}>
      <Header></Header>

      <Container>
        <h1>Services</h1>
        <BarberServicesList barberServices={barberServices}></BarberServicesList>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default BarberServicesPage;

export const getServerSideProps: GetServerSideProps<BarberServicesPageProps> = async (context) => {
  const barberServices = await getBarberServices();
  return {
    props: {
      barberServices: barberServices,
    },
  };
};
