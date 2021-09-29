import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
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
              <Link href="/bookAppointment">
                <a>Book</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
