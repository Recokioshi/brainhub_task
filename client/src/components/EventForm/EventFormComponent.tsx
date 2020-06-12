import React from 'react';
import './EventForm.css';

export const EventForm: React.FC = () => {
  return (
    <div className="event-form-wrapper">
      <form
        className="event-form"
        onSubmit={(event) => {
          event.preventDefault();
          console.log('Submit');
        }}
      >
        <h1>
          Submit now for our <br /> exiting event!
        </h1>
        <label htmlFor="name">First name</label>
        <input id="name" name="name" type="text" />
        <label htmlFor="surname">Last name</label>
        <input id="surname" name="surname" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="event-date">Event date</label>
        <input id="evet-date" name="evet-date" type="date" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EventForm;
