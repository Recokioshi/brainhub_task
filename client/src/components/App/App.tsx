import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { AppStateProps, AppDispatchProps } from './AppTypes';
import { State } from '../../redux/types';
import { Dispatch } from 'redux';
import EventForm from '../EventForm/EventForm';
import { AppProps } from './AppTypes';
import Confirmation from '../Confirmation/Confirmation';
import { FormState } from '../../redux/types';

const App: React.FC<AppProps> = ({ formState, responseOK }) => (
  <div className="App">{formState === FormState.GOT_RESPONSE && responseOK ? <Confirmation /> : <EventForm />}</div>
);

const mapStateToProps = ({ formState, responseOK }: State): AppStateProps => ({
  formState,
  responseOK,
});

const mapDispatchToProps = (dispatch: Dispatch): AppDispatchProps => ({});

export default connect<AppStateProps, AppDispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(App);
