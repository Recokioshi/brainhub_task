import { isRequestValid } from '../client/src/common/inputValidator';

export const processRequest = (request: Object): { valid: boolean; messaage: string } => {
  var isValid = isRequestValid(request);
  return { valid: isValid, messaage: isValid ? 'OK' : 'ERROR' };
};
