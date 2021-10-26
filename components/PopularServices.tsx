import React from 'react';
import { BarberServiceDto } from '../api/api';
import BarberServicesList from './BarberServicesList';
import Container from './Container';
import styles from './PopularServices.module.css';

export interface PopularServicesProps {
  barberServices: BarberServiceDto[];
}

export default function PopularServices({ barberServices }: PopularServicesProps) {
  return (
    <div className={styles.popularServices}>
      <Container>
        <h2 className={styles.heading}>Popular Services</h2>
        <BarberServicesList barberServices={barberServices}></BarberServicesList>
      </Container>
    </div>
  );
}
