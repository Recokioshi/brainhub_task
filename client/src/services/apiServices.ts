import axios from 'axios';

const BASE_URL = '/';

export const submitForm = async (name: string, surname: string, email: string, eventDate: Date): Promise<Object> => {
  const response = await axios.post(`${BASE_URL}addEvent`, { name, surname, email, eventDate });
  return response.status === 200 ? response.data : null;
};
