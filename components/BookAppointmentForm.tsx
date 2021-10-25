import React, { useState } from 'react';
import styles from './BookAppointmentForm.module.css';

export default function BookAppointmentForm() {
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
          <option selected={selectedBarberId == 1} value="1">
            Barber
          </option>
          <option selected={selectedBarberId == 2} value="2">
            Barber
          </option>
        </select>
      </div>
      <div>
        <label>Select a service</label>
        <select onChange={handleSelectedBarberServiceChange}>
          <option selected disabled></option>
          <option value="1">Service</option>
          <option value="2">Service</option>
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
