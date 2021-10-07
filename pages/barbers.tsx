import React from 'react';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './barbers.module.css';

export default function Barbers() {
  return (
    <div className={styles.page}>
      <Header></Header>

      <Container>
        <h1>Barbers</h1>
      </Container>

      <Footer></Footer>
    </div>
  );
}
