import axios from 'axios';

const host = 'http://localhost:3000';

export interface BarberDto {
  id: number;
  name: string;
  description: string;
  picture: string | null;
}

export async function getBarbers() {
  const response = await axios.get<BarberDto[]>(`${host}/barbers`);
  const data = response.data;
  return data;
}

export interface BarberServiceDto {
  id: number;
  name: string;
  price: string;
  description: string;
}

export async function getBarberServices() {
  const response = await axios.get<BarberServiceDto[]>(`${host}/barber-services`);
  const data = response.data;
  return data;
}
