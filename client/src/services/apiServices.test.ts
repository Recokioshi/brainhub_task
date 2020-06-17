import { submitForm, getResponseObjectForRejectedRequest } from './apiServices';
import { AxiosResponse } from 'axios';
let axios = require('axios');

describe('apiServices', () => {
  describe('submitForm', () => {
    axios.post = jest.fn(
      (url: string, body: { name: string; surname: string; email: string; eventDate: Date }): null => {
        if (body.name) {
          return null;
        } else {
          throw { response: { data: 'error', status: 403 } };
        }
      },
    );
    test('should return { responseOK: true, responseMessages: [] } if request is successful', async () => {
      // @ts-ignore
      const resuls = await submitForm('A', 'B', 'AAA@BBB.com', new Date());
      expect(resuls).toMatchObject({ responseOK: true, responseMessage: '' });
    });
    test('should return { responseOK: false, responseMessages: [messages from exception] } if request is unsuccessful', async () => {
      // @ts-ignore
      const resuls = await submitForm('', 'B', 'AAA@BBB.com', new Date());
      expect(resuls).toMatchObject({ responseOK: false, responseMessage: 'error' });
    });
  });

  describe('getResponseObjectForRejectedRequest', () => {
    test('should return { responseOK: false, responseMessages: response.data } for status 403', () => {
      const respObject = getResponseObjectForRejectedRequest({ status: 403, data: ['data error'] } as AxiosResponse);
      expect(respObject).toMatchObject({ responseOK: false, responseMessage: ['data error'] });
    });

    test('should return { responseOK: false, responseMessages: response.statusText } for status other than 403', () => {
      const respObject = getResponseObjectForRejectedRequest(({
        status: 500,
        statusText: 'message error',
      } as unknown) as AxiosResponse);
      expect(respObject).toMatchObject({ responseOK: false, responseMessage: 'message error' });
    });
  });
});
