import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { BarberDto, BarberServiceDto, createAppointment } from '../api/api';
import ActionButton from './ActionButton';
import styles from './BookAppointmentForm.module.css';
import DatetimeInput from './DatetimeInput';
import SelectInput, { SelectInputOption } from './SelectInput';
import TextInput from './TextInput';

interface BookAppointmentFormProps {
  barbers: BarberDto[];
  barberServices: BarberServiceDto[];
}

export default function BookAppointmentForm({ barbers, barberServices }: BookAppointmentFormProps) {
  const [selectedBarberId, setSelectedBarberId] = useState<number | null>(null);
  const [selectedBarberServiceId, setSelectedBarberServiceId] = useState<number | null>(null);
  const [selectedDatetime, setSelectedDatetime] = useState<Date | null>(null);
  const [clientName, setClientName] = useState('');
  const [clientPhoneNumber, setClientPhoneNumber] = useState('');

  const [errors, setErrors] = useState<string[]>([]);

  const router = useRouter();

  const validate = () => {
    const validationErrors: string[] = [];
    if (selectedBarberId == null) {
      validationErrors.push('Please select a Barber.');
    }
    if (selectedBarberServiceId == null) {
      validationErrors.push('Please select a Service.');
    }
    if (selectedDatetime == null) {
      validationErrors.push('Please select date and time.');
    }
    if (clientName.trim() == '') {
      validationErrors.push('Please enter your name.');
    }
    if (clientPhoneNumber.trim() == '') {
      validationErrors.push('Please enter your phone number.');
    }
    return validationErrors;
  };

  const handleSelectedBarberChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newSelectedBarberId = parseInt(e.target.value);
    setSelectedBarberId(newSelectedBarberId);
  };

  const handleSelectedBarberServiceChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newSelectedBarberServiceId = parseInt(e.target.value);
    setSelectedBarberServiceId(newSelectedBarberServiceId);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    if (selectedBarberId != null && selectedBarberServiceId != null && selectedDatetime != null) {
      await createAppointment({
        barberId: selectedBarberId,
        barberServiceId: selectedBarberServiceId,
        datetime: selectedDatetime.toISOString(),
        clientName: clientName,
        clientPhoneNumber: clientPhoneNumber,
      });
      router.push('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formField}>
        <SelectInput label="Select a Barber" onChange={handleSelectedBarberChange}>
          <SelectInputOption></SelectInputOption>
          {barbers.map((barber) => (
            <SelectInputOption key={barber.id} value={barber.id}>
              {barber.name}
            </SelectInputOption>
          ))}
        </SelectInput>
      </div>
      <div className={styles.formField}>
        <SelectInput label="Select a Service" onChange={handleSelectedBarberServiceChange}>
          <SelectInputOption></SelectInputOption>
          {barberServices.map((barberService) => (
            <SelectInputOption key={barberService.id} value={barberService.id}>
              {barberService.name}
            </SelectInputOption>
          ))}
        </SelectInput>
      </div>
      <div className={styles.formField}>
        <DatetimeInput
          label="Select date and time"
          value={selectedDatetime}
          onChange={setSelectedDatetime}
        ></DatetimeInput>
      </div>
      <div className={styles.formField}>
        <TextInput label="Name" value={clientName} onChange={(e) => setClientName(e.target.value)}></TextInput>
      </div>
      <div className={styles.formField}>
        <TextInput
          label="Phone Number"
          value={clientPhoneNumber}
          onChange={(e) => setClientPhoneNumber(e.target.value)}
        ></TextInput>
      </div>
      {errors.length > 0 ? (
        <div className={styles.errors}>
          {errors.map((error) => (
            <p key={error} className={styles.error}>
              {error}
            </p>
          ))}
        </div>
      ) : null}
      <ActionButton type="submit">Book</ActionButton>
    </form>
  );
}
