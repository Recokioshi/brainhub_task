import { connect } from 'react-redux';
import EventForm from './EventFormComponent';
import { EventFormStateProps, EventFormDispatchProps } from './EventFormTypes';
import { Dispatch } from 'redux';
import { State } from '../../redux/types';
import { submitForm } from '../../services/apiServices';

const mapStateToProps = (state: State): EventFormStateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): EventFormDispatchProps => ({
  onFormSubmit: async ({ name, surname, email, eventDate }) => {
    const response = await submitForm(name, surname, email, eventDate);
    console.log(`got data: ${JSON.stringify(response)}`);
  },
});

export default connect<EventFormStateProps, EventFormDispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps,
)(EventForm);
