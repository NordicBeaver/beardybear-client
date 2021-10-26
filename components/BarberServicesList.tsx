import React from 'react';
import { BarberServiceDto } from '../api/api';
import styles from './BarberServicesList.module.css';

interface BarberServicesListProps {
  barberServices: BarberServiceDto[];
}

export default function BarberServicesList({ barberServices }: BarberServicesListProps) {
  return (
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
  );
}
