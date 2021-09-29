import Link from 'next/link';
import React from 'react';
import styles from './Banner.module.css';
import Container from './Container';
import Image from 'next/image';
import bannerImage from '../public/banner.jpg';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Container>
        <div className={styles.content}>
          <div className={styles.bannerImage}>
            <Image src={bannerImage} alt="Barbershop Banner"></Image>
          </div>
          <div className={styles.textContent}>
            <p className={styles.slogan}>Be the Manliest Man on the Planet</p>
            <Link href="/">
              <a className={styles.actionButton}>Book appointment</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
