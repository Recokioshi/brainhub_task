import React, { useState } from 'react';
import './EventForm.css';
import { EventFormProps } from './EventFormTypes';

export const setValueFromOnChangeWithFunction = (fun: (input: any) => void) => (
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  fun(event.target.value);
};

const EventForm: React.FC<EventFormProps> = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState(0);
  return (
    <div className="event-form-wrapper">
      <form
        className="event-form"
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit({ name, surname, email, eventDate: new Date(eventDate) });
        }}
      >
        <h1>
          Submit now for our <br /> exiting event!
        </h1>
        <label htmlFor="name">First name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={setValueFromOnChangeWithFunction(setName)}
          required
        />
        <label htmlFor="surname">Last name</label>
        <input
          id="surname"
          name="surname"
          type="text"
          value={surname}
          onChange={setValueFromOnChangeWithFunction(setSurname)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={setValueFromOnChangeWithFunction(setEmail)}
          required
        />
        <label htmlFor="event-date">Event date</label>
        <input
          id="evet-date"
          name="evet-date"
          type="date"
          value={eventDate}
          onChange={setValueFromOnChangeWithFunction(setEventDate)}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
