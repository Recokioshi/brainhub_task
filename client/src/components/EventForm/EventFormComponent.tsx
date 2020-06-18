import React, { useState } from 'react';
import './EventForm.scss';
import { EventFormProps, ValidationErrorsProps } from './EventFormTypes';

export const setValueFromOnChangeWithFunction = (fun: (input: any) => void) => (
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  fun(event.target.value);
};

const ValidationErrors: React.FC<ValidationErrorsProps> = ({ validationErrors }) => {
  return (
    <div className="validation-errors-wrapper">
      {validationErrors.map((error) => (
        <div className="validation-error" key={error}>
          {error}
        </div>
      ))}
    </div>
  );
};

const EventForm: React.FC<EventFormProps> = ({
  onFormSubmit,
  getValidationErrors,
  errorsFromResponse,
  isFormDisabled,
}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState(0);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  return (
    <div className="event-form-wrapper">
      <h1>Submit now for our exiting event!</h1>
      <fieldset disabled={isFormDisabled} className="form-fieldset">
        <form
          className="event-form"
          onSubmit={(e) => {
            const formInput = { name, surname, email, eventDate: new Date(eventDate) };
            e.preventDefault();
            const validationErrors = getValidationErrors(formInput);
            if (validationErrors.length) {
              setValidationErrors(validationErrors);
            } else {
              onFormSubmit(formInput);
            }
          }}
        >
          <input
            id="name"
            name="name"
            placeholder="name"
            type="text"
            value={name}
            onChange={setValueFromOnChangeWithFunction(setName)}
            required
          />
          <input
            id="surname"
            name="surname"
            placeholder="surname"
            type="text"
            value={surname}
            onChange={setValueFromOnChangeWithFunction(setSurname)}
            required
          />
          <input
            id="email"
            name="email"
            placeholder="email"
            type="email"
            value={email}
            onChange={setValueFromOnChangeWithFunction(setEmail)}
            required
          />
          <label htmlFor="event-date">Pick prefered event date</label>
          <input
            id="evet-date"
            name="evet-date"
            placeholder="event date"
            type="date"
            value={eventDate}
            onChange={setValueFromOnChangeWithFunction(setEventDate)}
            required
          />
          <button>Submit</button>
          <ValidationErrors validationErrors={[...validationErrors, ...errorsFromResponse]} />
        </form>
      </fieldset>
    </div>
  );
};

export default EventForm;
