import { containsAllMandatoryFields, isRequestValid, getValidationErrors } from './inputValidator';

describe('inputValidator', () => {
  describe('containsAllMandatoryFields', () => {
    test('returns true for valid object input', () => {
      const returnValue = containsAllMandatoryFields({ name: '', surname: '', email: '', eventDate: new Date() });
      expect(returnValue).toBe(true);
    });

    test('returns false for missing name', () => {
      const returnValue = containsAllMandatoryFields({ surname: '', email: '', eventDate: new Date() });
      expect(returnValue).toBe(false);
    });

    test('returns false for missing surname', () => {
      const returnValue = containsAllMandatoryFields({ name: '', email: '', eventDate: new Date() });
      expect(returnValue).toBe(false);
    });

    test('returns false for missing email', () => {
      const returnValue = containsAllMandatoryFields({ name: '', surname: '', eventDate: new Date() });
      expect(returnValue).toBe(false);
    });

    test('returns false for missing eventDate', () => {
      const returnValue = containsAllMandatoryFields({ name: '', surname: '', email: '' });
      expect(returnValue).toBe(false);
    });
  });

  describe('getValidationErrors', () => {
    test('returns empty array for all fields filled', () => {
      const returnValue = getValidationErrors({ name: '', surname: '', email: '', eventDate: new Date() });
      expect(returnValue).toHaveLength(0);
    });

    test('returns error messaage for missing fields', () => {
      const returnValueWithoutName = getValidationErrors({ surname: '', email: '', eventDate: new Date() });
      expect(returnValueWithoutName).toHaveLength(1);
      const returnValueWithoutSurname = getValidationErrors({ name: '', email: '', eventDate: new Date() });
      expect(returnValueWithoutSurname).toHaveLength(1);
      const returnValueWithoutEmail = getValidationErrors({ name: '', surname: '', eventDate: new Date() });
      expect(returnValueWithoutEmail).toHaveLength(1);
      const returnValueWithoutEventDate = getValidationErrors({ name: '', surname: '', email: '' });
      expect(returnValueWithoutEventDate).toHaveLength(1);
    });
  });

  describe('inputValidator', () => {
    test('returns true for valid object input', () => {
      const returnValue = isRequestValid({ name: '', surname: '', email: '', eventDate: new Date() });
      expect(returnValue).toBe(true);
    });
  });
});
