export const emailAdressIsValidIfExists = (email: string | undefined): boolean => {
  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !email || emailRegex.test(String(email).toLowerCase());
};

export const allMandatoryFieldsAreFilled = (req: {
  name?: string;
  surname?: string;
  email?: string;
  eventDate?: Date;
}): boolean => {
  return !!req && !!req.name && !!req.surname && !!req.email && !!req.eventDate;
};

export const isValidDateIfExists = (date: Date | undefined): boolean => !date || (date.getTime && !!date.getTime());

export const getValidationErrors = (req: {
  name?: string;
  surname?: string;
  email?: string;
  eventDate?: Date;
}): string[] => {
  const errors = [];
  if (!allMandatoryFieldsAreFilled(req)) {
    errors.push('Some mandatory fields are missing');
  }
  if (!emailAdressIsValidIfExists(req.email)) {
    errors.push('Format of the email address is invalid');
  }
  if (!isValidDateIfExists(req.eventDate)) {
    errors.push('Event Date is invalid');
  }

  return errors;
};

export const isRequestValid = (req: Object): boolean => {
  return getValidationErrors(req).length === 0;
};
