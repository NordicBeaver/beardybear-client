import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { BarberDto, BarberServiceDto, getBarbers, getBarberServices } from '../api/api';
import BookAppointmentForm from '../components/BookAppointmentForm';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './book-appointment.module.css';

interface BookAppointmentPageProps {
  barbers: BarberDto[];
  barberServices: BarberServiceDto[];
}

const BookAppointmentPage: NextPage<BookAppointmentPageProps> = ({ barbers, barberServices }) => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Beardybear</title>
        <meta name="description" content="BeardyBear barbershop." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <Container>
        <h1>Book Appointment</h1>
        <BookAppointmentForm barbers={barbers} barberServices={barberServices}></BookAppointmentForm>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default BookAppointmentPage;

export const getServerSideProps: GetServerSideProps<BookAppointmentPageProps> = async (context) => {
  const [barbers, barberServices] = await Promise.all([await getBarbers(), await getBarberServices()]);
  return {
    props: {
      barbers: barbers,
      barberServices: barberServices,
    },
  };
};
