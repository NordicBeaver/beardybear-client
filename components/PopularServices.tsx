import React from 'react';
import { BarberServiceDto } from '../api/api';
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
        <ul>
          {barberServices.map((barberService) => (
            <li key={barberService.id} className={styles.service}>
              <div>
                <span className={styles.serviceName}>{barberService.name}</span>
                <span> - </span>
                <span className={styles.servicePrice}>${barberService.price}</span>
              </div>
              <p className={styles.serviceDescription}>{barberService.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
