import axios from 'axios';

const host = 'http://localhost:3000';

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
