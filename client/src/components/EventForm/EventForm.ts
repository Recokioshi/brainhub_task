import { connect } from 'react-redux';
import EventForm from './EventFormComponent';
import { EventFormStateProps, EventFormDispatchProps, FormInput } from './EventFormTypes';
import { Dispatch } from 'redux';
import { State } from '../../redux/types';
import { submitForm } from '../../services/apiServices';
import { getValidationErrors } from './inputValidator';

export const onFormSubmit = (dispatch: Dispatch) => async ({ name, surname, email, eventDate }: FormInput) => {
  const response = await submitForm(name, surname, email, eventDate);
  console.log(`got data: ${JSON.stringify(response)}`);
};

const mapStateToProps = (state: State): EventFormStateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): EventFormDispatchProps => ({
  getValidationErrors,
  onFormSubmit: onFormSubmit(dispatch),
});

export default connect<EventFormStateProps, EventFormDispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps,
)(EventForm);
