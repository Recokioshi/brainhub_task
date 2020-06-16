import axios from 'axios';

const BASE_URL = '/';

export const submitForm = async (
  name: string = '',
  surname: string = '',
  email: string = '',
  eventDate: Date = new Date(),
): Promise<{ responseOK: boolean; responseMessages: string[] }> => {
  try {
    await axios.post(`${BASE_URL}addEvent`, { name, surname, email, eventDate });
    return { responseOK: true, responseMessages: [] };
  } catch (error) {
    return { responseOK: false, responseMessages: error.response.data };
  }
};
