export type FormInput = { name: string; surname: string; email: string; eventDate: Date };

export type EventFormStateProps = {
  errorsFromResponse: string[];
  isFormDisabled: boolean;
};

export type EventFormDispatchProps = {
  onFormSubmit: ({}: FormInput) => void;
  getValidationErrors: ({}: FormInput) => string[];
};

export type EventFormProps = EventFormStateProps & EventFormDispatchProps;

export type ValidationErrorsProps = { validationErrors: string[] };
