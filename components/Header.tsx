import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Container from './Container';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <span className={styles.logo}>Beardy Bear</span>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/barbers">
                <a>Barbers</a>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/book-appointment">
                <a>Book</a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}
