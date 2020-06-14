import axios from 'axios';

const BASE_URL = '/';

export const submitForm = async (
  name: string,
  surname: string,
  email: string,
  eventDate: Date,
): Promise<{ responseOK: boolean; responseMessage: string }> => {
  const response = await axios.post(`${BASE_URL}addEvent`, { name, surname, email, eventDate });
  const responseOK = response.status === 200 ? true : false;
  return { responseOK, responseMessage: response.statusText };
};
