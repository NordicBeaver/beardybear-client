import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <span>Beardy Bear</span>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/barbers">
            <a>Barbers</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/bookAppointment">
            <a>Book</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
