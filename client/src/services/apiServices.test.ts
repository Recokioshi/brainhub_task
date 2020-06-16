import { submitForm } from './apiServices';
let axios = require('axios');

describe('apiServices', () => {
  describe('submitForm', () => {
    axios.post = jest.fn(
      (url: string, body: { name: string; surname: string; email: string; eventDate: Date }): null => {
        if (body.name) {
          return null;
        } else {
          throw { response: { data: ['error'] } };
        }
      },
    );
    test('should return { responseOK: true, responseMessages: [] } if request is successful', async () => {
      // @ts-ignore
      const resuls = await submitForm('A', 'B', 'AAA@BBB.com', new Date());
      expect(resuls).toMatchObject({ responseOK: true, responseMessages: [] });
    });
    test('should return { responseOK: false, responseMessages: [messages from exception] } if request is unsuccessful', async () => {
      // @ts-ignore
      const resuls = await submitForm('', 'B', 'AAA@BBB.com', new Date());
      expect(resuls).toMatchObject({ responseOK: false, responseMessages: ['error'] });
    });
  });
});
