import reducer, { defaultState } from '../reducer';
import { FormState, ActionType } from '../types';

describe('reducer', () => {
  describe('RESET_FLOW', () => {
    test('should return default state', () => {
      const res = reducer(null, { type: ActionType.RESET_FLOW });
      expect(res).toMatchObject(defaultState);
    });
  });
  describe('REQUEST_SENT', () => {
    test('should return default state with formState = FormState.REQUEST_SENT', () => {
      const res = reducer(null, { type: ActionType.REQUEST_SENT });
      expect(res).toMatchObject({ ...defaultState, formState: FormState.REQUEST_SENT });
    });
  });
  describe('GOT_RESPONSE', () => {
    test('should return input state with formState = FormState.GOT_RESPONSE and responseOK and responseMessages passed from action', () => {
      const actionObj = { type: ActionType.GOT_RESPONSE, responseOK: false, responseMessages: ['message'] };
      const res = reducer({ ...defaultState, additionalField: 'test' }, actionObj);
      expect(res).toMatchObject({
        ...defaultState,
        responseOK: actionObj.responseOK,
        responseMessages: actionObj.responseMessages,
        formState: FormState.GOT_RESPONSE,
        additionalField: 'test',
      });
    });
  });
});
