import { Reducer } from 'redux';
import { State, Action, ActionType, FormState } from './types';

export const defaultState: State = {
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
      return { ...defaultState };
    case ActionType.REQUEST_SENT:
      return { ...defaultState, formState: FormState.REQUEST_SENT };
    default:
      return { ...state };
  }
};

export default reducer;
