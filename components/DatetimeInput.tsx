import React from 'react';
import ReactDatePicker from 'react-datepicker';
import TextInput from './TextInput';
import 'react-datepicker/dist/react-datepicker.css';

export interface DatetimeInputProps {
  label: string;
  value: Date | null;
  onChange: (date: Date) => void;
}

export default function DatetimeInput({ label, value, onChange }: DatetimeInputProps) {
  const CustomInput = <TextInput label={label}></TextInput>;

  return (
    <ReactDatePicker
      customInput={CustomInput}
      showTimeSelect
      dateFormat="MMMM d, yyyy h:mm aa"
      selected={value}
      onChange={(date) => onChange(date as Date)}
    ></ReactDatePicker>
  );
}
