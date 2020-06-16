import { processRequest } from './addEvent';

describe('addEvent', () => {
  test('for valid input should return {valid: true, message: "OK"}', () => {
    const { valid, message } = processRequest({ name: 'A', surname: 'B', email: 'AAA@BBB.com', eventDate: new Date() });
    expect(valid).toBeTruthy();
    expect(message).toBe('OK');
  });

  test('for missing field input should return {valid: false, message: ["Some mandatory fields are missing"]}', () => {
    const { valid, message } = processRequest({ surname: 'A', email: 'AAA@BBB.com', eventDate: new Date() });
    expect(valid).toBeFalsy();
    expect(message).toBe('["Some mandatory fields are missing"]');
  });

  test('for empty mandatory field input should return {valid: false, message: ["Some mandatory fields are missing"]}', () => {
    const { valid, message } = processRequest({ name: '', surname: 'B', email: 'AAA@BBB.com', eventDate: new Date() });
    expect(valid).toBeFalsy();
    expect(message).toBe('["Some mandatory fields are missing"]');
  });

  test('for wrong email address, should return {valid: false, message: ["Format of the email address is invalid"]}', () => {
    const { valid, message } = processRequest({ name: 'A', surname: 'B', email: 'AB.com', eventDate: new Date() });
    expect(valid).toBeFalsy();
    expect(message).toBe('["Format of the email address is invalid"]');
  });

  test('for not parsable eventDate, should return {valid: false, message: ["Event Date is invalid"]}', () => {
    // @ts-ignore
    const { valid, message } = processRequest({ name: 'A', surname: 'B', email: 'AAA@BBB.com', eventDate: 'a' });
    expect(valid).toBeFalsy();
    expect(message).toBe('["Event Date is invalid"]');
  });
});
