import Link from 'next/link';
import React from 'react';
import styles from './AboutUs.module.css';
import Container from './Container';
import Image from 'next/image';
import aboutImage from '../public/about.jpg';

export default function AboutUs() {
  return (
    <div>
      <Container>
        <div className={styles.content}>
          <div>
            <Image src={aboutImage} alt="Barbershop interior"></Image>
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Who we are</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae luctus ligula, in rhoncus velit. Sed
              vitae sollicitudin magna. Quisque hendrerit porta facilisis. Duis aliquam quam ac pulvinar elementum.
              Mauris rhoncus tempus arcu sit amet vestibulum. Proin felis lectus, fermentum ac ullamcorper vel, tempus
              id nisi. Integer euismod sem gravida, laoreet felis in, vulputate orci. Aliquam non lacinia nulla. Mauris
              dignissim finibus orci, at auctor tortor blandit efficitur. Quisque ac urna ut ligula placerat
              ullamcorper. In id magna ac libero feugiat fermentum. Sed euismod mattis tellus sit amet porta.{' '}
            </p>
            <Link href="/barbers">
              <a className={styles.button}>Our Team</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
