import { containsAllMandatoryFields, isRequestValid } from './addEvent';

describe('addEvent', () => {
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
  describe('addEventCallback', () => {
    test('returns true for valid object input', () => {
      const returnValue = isRequestValid({ name: '', surname: '', email: '', eventDate: new Date() });
      expect(returnValue).toBe(true);
    });
  });
});
