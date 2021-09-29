import React from 'react';
import Container from './Container';
import styles from './PopularServices.module.css';

export default function PopularServices() {
  return (
    <div className={styles.popularServices}>
      <Container>
        <h2 className={styles.heading}>Popular Services</h2>
        <ul>
          <li className={styles.service}>
            <div>
              <span className={styles.serviceName}>Haircut</span>
              <span> - </span>
              <span className={styles.servicePrice}>$10.00</span>
            </div>
            <p className={styles.serviceDescription}>A simple haircut</p>
          </li>
          <li className={styles.service}>
            <div>
              <span className={styles.serviceName}>Mega Haircut</span>
              <span> - </span>
              <span className={styles.servicePrice}>$20.00</span>
            </div>
            <p className={styles.serviceDescription}>The same haircut but better</p>
          </li>
        </ul>
      </Container>
    </div>
  );
}
