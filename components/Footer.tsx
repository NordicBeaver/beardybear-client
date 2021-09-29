import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.blockWrapper}>
            <div>
              <h2 className={styles.heading}>Location</h2>
              <p className={styles.text}>1234 Random Street</p>
              <p className={styles.text}>Fresno, CA 93721</p>
            </div>
          </div>
          <div className={styles.blockWrapper}>
            <div>
              <h2 className={styles.heading}>Hours</h2>
              <p className={styles.text}>Tues-Fri 8:00am-8:00pm</p>
              <p className={styles.text}>Sat 8:00am-8:00pm</p>
              <p className={styles.text}>Closed Sun &amp; Mon</p>
            </div>
          </div>
          <div className={styles.blockWrapper}>
            <div>
              <h2 className={styles.heading}>Contact Us</h2>
              <p className={styles.text}>555-123-4567</p>
              <p className={styles.text}>random@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
