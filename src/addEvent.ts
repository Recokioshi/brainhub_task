import { getValidationErrors } from '../client/src/common/inputValidator';

export const processRequest = (request: {
  name?: string | undefined;
  surname?: string | undefined;
  email?: string | undefined;
  eventDate?: string | undefined;
}): { valid: boolean; message: string } => {
  const inputObject = { ...request, eventDate: new Date(String(request.eventDate)) };
  const validationErrors = getValidationErrors(inputObject);
  const isValid = !validationErrors.length;
  return { valid: isValid, message: isValid ? 'OK' : JSON.stringify(validationErrors) };
};
