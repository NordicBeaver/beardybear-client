import React from 'react';
import { BarberDto, imageUrl } from '../api/api';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BarberDetails.module.css';

export interface BarberDetailsProps {
  barber: BarberDto;
}

export default function BarberDetails({ barber }: BarberDetailsProps) {
  return (
    <div className={styles.barberDetails}>
      <div className={styles.photo}>
        {barber.picture ? (
          <Image
            src={imageUrl(barber.picture)}
            alt={barber.name}
            layout="fill"
            sizes="640px"
            objectFit="contain"
            objectPosition="top"
          ></Image>
        ) : null}
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{barber.name}</h2>
        <p className={styles.description}>{barber.description}</p>
        <Link href="/book">
          <a className={styles.button}>Book Appointment</a>
        </Link>
      </div>
    </div>
  );
}
