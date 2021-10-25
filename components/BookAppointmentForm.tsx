import React, { useState } from 'react';
import { BarberDto, BarberServiceDto } from '../api/api';
import styles from './BookAppointmentForm.module.css';
import SelectInput, { SelectInputOption } from './SelectInput';
import TextInput from './TextInput';

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
        <SelectInput label="Select a Barber" onChange={handleSelectedBarberChange}>
          <SelectInputOption></SelectInputOption>
          {barbers.map((barber) => (
            <SelectInputOption key={barber.id} value={barber.id}>
              {barber.name}
            </SelectInputOption>
          ))}
        </SelectInput>
      </div>
      <div>
        <SelectInput label="Select a Service" onChange={handleSelectedBarberServiceChange}>
          <SelectInputOption></SelectInputOption>
          {barberServices.map((barberService) => (
            <SelectInputOption key={barberService.id} value={barberService.id}>
              {barberService.name}
            </SelectInputOption>
          ))}
        </SelectInput>
      </div>
      <div>
        <TextInput
          label="Select date and time"
          value={selectedDatetime}
          onChange={handleSelectedDatetimeChange}
        ></TextInput>
      </div>
      <button type="submit">Book</button>
    </form>
  );
}
