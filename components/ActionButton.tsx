import React, { PropsWithChildren } from 'react';
import styles from './ActionButton.module.css';

type ActionButtonProps = PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export default function ActionButton({ children, ...props }: ActionButtonProps) {
  return (
    <button className={styles.actionButton} {...props}>
      {children}
    </button>
  );
}
