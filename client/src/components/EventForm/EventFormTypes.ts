export type FormInput = { name: string; surname: string; email: string; eventDate: Date };

export type EventFormStateProps = {};

export type EventFormDispatchProps = {
  onFormSubmit: ({}: FormInput) => void;
  getValidationErrors: ({}: FormInput) => string[];
};

export type EventFormProps = EventFormStateProps & EventFormDispatchProps;

export type ValidationErrorsProps = { validationErrors: string[] };
