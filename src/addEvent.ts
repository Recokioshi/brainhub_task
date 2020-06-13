export const containsAllMandatoryFields = (req: Object): boolean =>
  req.hasOwnProperty('name') &&
  req.hasOwnProperty('surname') &&
  req.hasOwnProperty('email') &&
  req.hasOwnProperty('eventDate');

export const isRequestValid = (req: Object): boolean => {
  return containsAllMandatoryFields(req);
};
