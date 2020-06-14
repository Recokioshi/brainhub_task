import { Reducer } from 'redux';
import { State, Action } from './types';

const defaultState: State = {
  responseMessage: '',
  responseOK: true,
};

const reducer: Reducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case 'GOT_RESPONSE':
      return { ...state, responseMessage: action.responseMessage, responseOK: action.responseOK };
    case 'REQUEST_SENT':
      return { ...state, responseMessage: '', responseOK: true };
    default:
      return { ...state };
  }
};

export default reducer;
