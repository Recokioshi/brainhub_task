import { connect } from 'react-redux';
import EventForm from './EventFormComponent';
import { EventFormStateProps, EventFormDispatchProps, FormInput } from './EventFormTypes';
import { Dispatch } from 'redux';
import { State, FormState } from '../../redux/types';
import { submitForm } from '../../services/apiServices';
import { getValidationErrors } from '../../common/inputValidator';
import { gotResponse, requestSent } from '../../redux/actions';

export const onFormSubmit = (dispatch: Dispatch) => async ({ name, surname, email, eventDate }: FormInput) => {
  dispatch(requestSent());
  const { responseOK, responseMessage } = await submitForm(name, surname, email, eventDate);
  dispatch(gotResponse(responseOK, responseMessage ? [responseMessage] : []));
};

const mapStateToProps = (state: State): EventFormStateProps => {
  return { errorsFromResponse: state.responseMessages, isFormDisabled: state.formState === FormState.REQUEST_SENT };
};

const mapDispatchToProps = (dispatch: Dispatch): EventFormDispatchProps => ({
  getValidationErrors,
  onFormSubmit: onFormSubmit(dispatch),
});

export default connect<EventFormStateProps, EventFormDispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps,
)(EventForm);
