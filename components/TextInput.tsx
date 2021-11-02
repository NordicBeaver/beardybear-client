import React, { PropsWithChildren } from 'react';
import styles from './TextInput.module.css';

interface MyTextInputProps {
  label: string;
}

type TextInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  MyTextInputProps;

export default function TextInput({ label, ...props }: TextInputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input type="text" {...props} className={styles.textInput}></input>
    </div>
  );
}
