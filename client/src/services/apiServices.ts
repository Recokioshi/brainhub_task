import axios, { AxiosResponse } from 'axios';

const BASE_URL = '/';

export const getResponseObjectForRejectedRequest = (
  response: AxiosResponse,
): { responseOK: boolean; responseMessage: string } => ({
  responseOK: false,
  responseMessage: response.status === 403 ? response.data : response.statusText,
});

export const submitForm = async (
  name: string = '',
  surname: string = '',
  email: string = '',
  eventDate: Date = new Date(),
): Promise<{ responseOK: boolean; responseMessage: string }> => {
  try {
    await axios.post(`${BASE_URL}addEvent`, { name, surname, email, eventDate });
    return { responseOK: true, responseMessage: '' };
  } catch (error) {
    const response = error.response as AxiosResponse;

    return getResponseObjectForRejectedRequest(response);
  }
};
