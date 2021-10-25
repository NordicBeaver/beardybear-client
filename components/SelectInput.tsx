import React, { PropsWithChildren } from 'react';
import styles from './SelectInput.module.css';

interface MySelectInputProps {
  label: string;
}

type SelectInputProps = PropsWithChildren<React.HTMLProps<HTMLSelectElement>> & MySelectInputProps;

export default function SelectInput({ children, label, ...props }: SelectInputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select className={styles.selectInput} {...props}>
        {children}
      </select>
    </div>
  );
}

export function SelectInputOption(props: React.HTMLProps<HTMLOptionElement>) {
  return <option className={styles.selectInputOption} {...props}></option>;
}
