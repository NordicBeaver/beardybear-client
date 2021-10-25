import React, { useState } from 'react';
import { BarberDto, BarberServiceDto } from '../api/api';
import styles from './BookAppointmentForm.module.css';

interface BookAppointmentFormProps {
  barbers: BarberDto[];
  barberServices: BarberServiceDto[];
}

export default function BookAppointmentForm({ barbers, barberServices }: BookAppointmentFormProps) {
  const [selectedBarberId, setSelectedBarberId] = useState<number | null>(null);
  const [selectedBarberServiceId, setSelectedBarberServiceId] = useState<number | null>(null);
  const [selectedDatetime, setSelectedDatetime] = useState('');

  const handleSelectedBarberChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newSelectedBarberId = parseInt(e.target.value);
    setSelectedBarberId(newSelectedBarberId);
  };

  const handleSelectedBarberServiceChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newSelectedBarberServiceId = parseInt(e.target.value);
    setSelectedBarberServiceId(newSelectedBarberServiceId);
  };

  const handleSelectedDatetimeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newSelectedDatetime = e.target.value;
    setSelectedDatetime(newSelectedDatetime);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(selectedBarberId, selectedBarberServiceId, selectedDatetime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select a barber</label>
        <select onChange={handleSelectedBarberChange}>
          <option selected={selectedBarberId == null} disabled></option>
          {barbers.map((barber) => (
            <option key={barber.id} value={barber.id}>
              {barber.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select a service</label>
        <select onChange={handleSelectedBarberServiceChange}>
          <option selected disabled></option>
          {barberServices.map((barberService) => (
            <option key={barberService.id} value={barberService.id}>
              {barberService.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select date and time</label>
        <input type="text" onChange={handleSelectedDatetimeChange}></input>
      </div>
      <button type="submit">Book</button>
    </form>
  );
}
