import { Reducer } from 'redux';
import { State, Action, ActionType, FormState } from './types';

const defaultState: State = {
  responseMessages: [],
  responseOK: true,
  formState: FormState.ENTERED,
};

const reducer: Reducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case ActionType.GOT_RESPONSE:
      return {
        ...state,
        responseMessages: action.responseMessages,
        responseOK: action.responseOK,
        formState: FormState.GOT_RESPONSE,
      };
    case ActionType.RESET_FLOW:
      return { ...state, responseMessages: [], responseOK: true, formState: FormState.ENTERED };
    case ActionType.REQUEST_SENT:
      return { ...state, responseMessages: [], responseOK: true, formState: FormState.REQUEST_SENT };
    default:
      return { ...state };
  }
};

export default reducer;
