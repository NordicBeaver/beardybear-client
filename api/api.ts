import axios, { AxiosResponse } from 'axios';

const host = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000';

export function imageUrl(filename: string) {
  return `${host}/images/${filename}`;
}

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

export interface AppointmentDto {
  id: number;
  barber: BarberDto;
  barberService: BarberServiceDto;
  datetime: string;
  clientName: string;
  clientPhoneNumber: string;
}

export interface CreateAppointmentDto {
  barberId: number;
  barberServiceId: number;
  datetime: string;
  clientName: string;
  clientPhoneNumber: string;
}

export async function createAppointment(dto: CreateAppointmentDto) {
  const response = (await axios.post(`${host}/appointments`, dto)) as AxiosResponse<AppointmentDto>;
  const data = response.data;
  return data;
}
