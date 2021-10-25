import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import BookAppointmentForm from '../components/BookAppointmentForm';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './book-appointment.module.css';

const BookAppointment: NextPage = () => {
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
        <BookAppointmentForm></BookAppointmentForm>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default BookAppointment;
