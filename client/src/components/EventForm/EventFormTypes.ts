export type EventFormStateProps = {};

export type EventFormDispatchProps = {
  onFormSubmit: ({}: { name: string; surname: string; email: string; eventDate: Date }) => void;
};

export type EventFormProps = EventFormStateProps & EventFormDispatchProps;
