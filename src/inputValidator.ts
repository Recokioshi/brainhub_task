export const containsAllMandatoryFields = (req: Object): boolean =>
  req.hasOwnProperty('name') &&
  req.hasOwnProperty('surname') &&
  req.hasOwnProperty('email') &&
  req.hasOwnProperty('eventDate');

export const getValidationErrors = (req: Object): string[] => {
  const errors = [];
  if (!containsAllMandatoryFields(req)) {
    errors.push('Some mandatory fields are missing');
  }

  return errors;
};

export const isRequestValid = (req: Object): boolean => {
  return getValidationErrors(req).length === 0;
};
