import { processRequest } from '../addEvent';
import { Collection } from 'mongodb';

describe('addEvent', () => {
  describe('processRequest', () => {
    const collection = ({ insertOne: async () => new Promise((resolve) => resolve()) } as unknown) as Collection;
    const collectionWithException = ({
      insertOne: async () => new Promise((resolve, reject) => reject('rejected')),
    } as unknown) as Collection;

    test('for valid input should return {valid: true, message: "OK"}', async () => {
      const { valid, message } = await processRequest(
        { name: 'A', surname: 'B', email: 'AAA@BBB.com', eventDate: '1' },
        collection,
      );
      expect(valid).toBeTruthy();
      expect(message).toBe('OK');
    });

    test('for valid input but failed db call should return {valid: false, message: message from db}', async () => {
      const { valid, message } = await processRequest(
        { name: 'A', surname: 'B', email: 'AAA@BBB.com', eventDate: '1' },
        collectionWithException,
      );
      console.log(message);
      expect(valid).toBeFalsy();
      expect(message).toBe('["rejected"]');
    });

    test('for missing field input should return {valid: false, message: ["Some mandatory fields are missing"]}', async () => {
      const { valid, message } = await processRequest(
        { surname: 'A', email: 'AAA@BBB.com', eventDate: '1' },
        collection,
      );
      expect(valid).toBeFalsy();
      expect(message).toBe('["Some mandatory fields are missing"]');
    });

    test('for empty mandatory field input should return {valid: false, message: ["Some mandatory fields are missing"]}', async () => {
      const { valid, message } = await processRequest(
        { name: '', surname: 'B', email: 'AAA@BBB.com', eventDate: '1' },
        collection,
      );
      expect(valid).toBeFalsy();
      expect(message).toBe('["Some mandatory fields are missing"]');
    });

    test('for wrong email address, should return {valid: false, message: ["Format of the email address is invalid"]}', async () => {
      const { valid, message } = await processRequest(
        { name: 'A', surname: 'B', email: 'AB.com', eventDate: '1' },
        collection,
      );
      expect(valid).toBeFalsy();
      expect(message).toBe('["Format of the email address is invalid"]');
    });

    test('for not parsable eventDate, should return {valid: false, message: ["Event Date is invalid"]}', async () => {
      // @ts-ignore
      const { valid, message } = await processRequest(
        { name: 'A', surname: 'B', email: 'AAA@BBB.com', eventDate: 'a' },
        collection,
      );
      expect(valid).toBeFalsy();
      expect(message).toBe('["Event Date is invalid"]');
    });
  });
});
