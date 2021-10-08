import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { BarberDto, getBarbers } from '../api/api';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './barbers.module.css';

interface BarbersPageProps {
  barbers: BarberDto[];
}

const BarbersPage: NextPage<BarbersPageProps> = ({ barbers }) => {
  return (
    <div className={styles.page}>
      <Header></Header>

      <Container>
        <h1>Barbers</h1>
        <ul>
          {barbers.map((barber) => (
            <li key={barber.id}>{barber.name}</li>
          ))}
        </ul>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default BarbersPage;

export const getServerSideProps: GetServerSideProps<BarbersPageProps> = async (constext) => {
  const barbers = await getBarbers();
  return {
    props: {
      barbers: barbers,
    },
  };
};
