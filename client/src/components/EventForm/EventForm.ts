import { connect } from 'react-redux';
import EventForm from './EventFormComponent';
import { EventFormStateProps, EventFormDispatchProps } from './EventFormTypes';
import { Dispatch } from 'redux';
import { State } from '../../redux/types';

const mapStateToProps = (state: State): EventFormStateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): EventFormDispatchProps => ({ onFormSubmit: () => {} });

export default connect<EventFormStateProps, EventFormDispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps,
)(EventForm);
