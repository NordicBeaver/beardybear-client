import React, { PropsWithChildren } from 'react';
import styles from './Container.module.css';

export default function Container({ children }: PropsWithChildren<{}>) {
  return <div className={styles.container}>{children}</div>;
}
