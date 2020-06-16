import {
  isRequestValid,
  getValidationErrors,
  emailAdressIsValidIfExists,
  allMandatoryFieldsAreFilled,
  isValidDateIfExists,
} from './inputValidator';
describe('inputValidator', () => {
  describe('emailAdressIsValidIfExists', () => {
    test('returns true for valid email address', () => {
      const results = emailAdressIsValidIfExists('AAA@example.com');
      expect(results).toBeTruthy();
    });

    test('returns true for empty email address', () => {
      const results = emailAdressIsValidIfExists('');
      expect(results).toBeTruthy();
    });

    test('returns true for null address', () => {
      // @ts-ignore
      const results = emailAdressIsValidIfExists(null);
      expect(results).toBeTruthy();
    });

    test('returns true for undefined email address', () => {
      const results = emailAdressIsValidIfExists(undefined);
      expect(results).toBeTruthy();
    });

    test('returns false for valid email address format', () => {
      const results = emailAdressIsValidIfExists('AAAexample.com');
      expect(results).toBeFalsy();
    });
  });

  describe('allMandatoryFieldsAreFilled', () => {
    test('returns true for valid input', () => {
      const results = allMandatoryFieldsAreFilled({
        name: 'A',
        surname: 'B',
        email: 'AAA@BBB.com',
        eventDate: new Date(),
      });
      expect(results).toBeTruthy();
    });
    test('returns false for null input', () => {
      // @ts-ignore
      const results = allMandatoryFieldsAreFilled(null);
      expect(results).toBeFalsy();
    });
    test('returns false for undefined input', () => {
      // @ts-ignore
      const results = allMandatoryFieldsAreFilled(undefined);
      expect(results).toBeFalsy();
    });
    test('returns false for missing field input', () => {
      const results = allMandatoryFieldsAreFilled({ name: 'A', email: 'AAA@BBB.com', eventDate: new Date() });
      expect(results).toBeFalsy();
    });
    test('returns true for empty field input', () => {
      const results = allMandatoryFieldsAreFilled({ name: 'A', surname: 'B', email: '', eventDate: new Date() });
      expect(results).toBeFalsy();
    });
  });

  describe('isValidDate', () => {
    test('returns true for valid date', () => {
      const result = isValidDateIfExists(new Date());
      expect(result).toBeTruthy();
    });
    test('returns true for null input', () => {
      // @ts-ignore
      const result = isValidDateIfExists(null);
      expect(result).toBeTruthy();
    });
    test('returns true for undefined input', () => {
      // @ts-ignore
      const result = isValidDateIfExists(undefined);
      expect(result).toBeTruthy();
    });
    test('returns false for string input', () => {
      // @ts-ignore
      const result = isValidDateIfExists('aaa');
      expect(result).toBeFalsy();
    });
  });

  describe('getValidationErrors', () => {
    test('returns empty array for all fields filled', () => {
      const returnValue = getValidationErrors({ name: 'A', surname: 'B', email: 'AAA@BBB.com', eventDate: new Date() });
      expect(returnValue).toHaveLength(0);
    });
    describe('for missing fields, returns an array with "Some mandatory fields are missing" message ', () => {
      test('missing name', () => {
        const returnValueWithoutName = getValidationErrors({
          surname: 'B',
          email: 'AAA@BBB.com',
          eventDate: new Date(),
        });
        expect(returnValueWithoutName).toHaveLength(1);
        expect(returnValueWithoutName).toContain('Some mandatory fields are missing');
      });
      test('missing surname', () => {
        const returnValueWithoutSurname = getValidationErrors({
          name: 'A',
          email: 'AAA@BBB.com',
          eventDate: new Date(),
        });
        expect(returnValueWithoutSurname).toHaveLength(1);
        expect(returnValueWithoutSurname).toContain('Some mandatory fields are missing');
      });
      test('missing email', () => {
        const returnValueWithoutEmail = getValidationErrors({ name: 'A', surname: 'B', eventDate: new Date() });
        expect(returnValueWithoutEmail).toHaveLength(1);
        expect(returnValueWithoutEmail).toContain('Some mandatory fields are missing');
      });
      test('missing eventDate', () => {
        const returnValueWithoutEventDate = getValidationErrors({ name: 'A', surname: 'B', email: 'A@B.com' });
        expect(returnValueWithoutEventDate).toHaveLength(1);
        expect(returnValueWithoutEventDate).toContain('Some mandatory fields are missing');
      });
    });

    test('for empty mandatory field, returns an array with "Some mandatory fields are missing"', () => {
      const errors = getValidationErrors({ name: '', surname: 'B', email: 'AAA@BBB.com', eventDate: new Date() });
      expect(errors).toHaveLength(1);
      expect(errors).toContain('Some mandatory fields are missing');
    });
    test('for wrong email address, returns an array with "Format of the email address is invalid" message', () => {
      const errors = getValidationErrors({ name: 'A', surname: 'B', email: 'AAABBB.com', eventDate: new Date() });
      expect(errors).toHaveLength(1);
      expect(errors).toContain('Format of the email address is invalid');
    });

    test('for not parsable eventDate, returns an array with "Event Date is invalid" message', () => {
      // @ts-ignore
      const errors = getValidationErrors({ name: 'A', surname: 'B', email: 'AAA@BBB.com', eventDate: 'a' });
      expect(errors).toHaveLength(1);
      expect(errors).toContain('Event Date is invalid');
    });
  });

  describe('inputValidator', () => {
    test('returns true for valid object input', () => {
      const returnValue = isRequestValid({ name: 'A', surname: 'B', email: 'AAA@BBB.com', eventDate: new Date() });
      expect(returnValue).toBeTruthy();
    });

    test('returns false for missing field in the input', () => {
      const returnValue = isRequestValid({ surname: 'B', email: 'AAA@BBB.com', eventDate: new Date() });
      expect(returnValue).toBeFalsy();
    });

    test('returns false for empty field in the input', () => {
      const returnValue = isRequestValid({ name: '', surname: 'B', email: 'AAA@BBB.com', eventDate: new Date() });
      expect(returnValue).toBeFalsy();
    });

    test('returns false for wrong email format in the input', () => {
      const returnValue = isRequestValid({ name: 'A', surname: 'B', email: 'AAABBB.com', eventDate: new Date() });
      expect(returnValue).toBeFalsy();
    });
  });
});
