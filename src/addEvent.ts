import { getValidationErrors } from '../client/src/common/inputValidator';
import { Collection } from 'mongodb';

type RequestInput = {
  name?: string | undefined;
  surname?: string | undefined;
  email?: string | undefined;
  eventDate?: string | undefined;
};

export const processRequest = async (
  request: RequestInput,
  collection: Collection<any>,
): Promise<{ valid: boolean; message: string }> => {
  const inputObject = { ...request, eventDate: new Date(String(request.eventDate)) };
  const validationErrors = getValidationErrors(inputObject);
  const isValid = !validationErrors.length;

  if (isValid) {
    try {
      await collection.insertOne(inputObject);
      return { valid: isValid, message: 'OK' };
    } catch (err) {
      console.log(`error while adding new submission: ${err}`);
      return { valid: false, message: JSON.stringify([err]) };
    }
  } else {
    return { valid: false, message: JSON.stringify(validationErrors) };
  }
};
