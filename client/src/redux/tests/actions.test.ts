import { resetFlow, gotResponse, requestSent } from '../actions';
import { ActionType } from '../types';
describe('actions', () => {
  describe('resetFlow', () => {
    test('should return resetFlow action', () => {
      const action = resetFlow();
      expect(action).toMatchObject({ type: ActionType.RESET_FLOW });
    });
  });
  describe('requestSent', () => {
    test('should return gotResponse action', () => {
      const action = requestSent();
      expect(action).toMatchObject({ type: ActionType.REQUEST_SENT });
    });
  });
  describe('gotResponse', () => {
    test('should return resetFlow action with responseOK and responseMessages passed from params', () => {
      const action = gotResponse(false, ['error']);
      expect(action).toMatchObject({ type: ActionType.GOT_RESPONSE, responseOK: false, responseMessages: ['error'] });
    });
    test('should return resetFlow action with responseOK=false and responseMessages=[] when null params', () => {
      // @ts-ignore
      const action = gotResponse(null, null);
      expect(action).toMatchObject({ type: ActionType.GOT_RESPONSE, responseOK: false, responseMessages: [] });
    });
    test('should return resetFlow action with responseOK=false and responseMessages=[] when undefined params', () => {
      // @ts-ignore
      const action = gotResponse(undefined, undefined);
      expect(action).toMatchObject({ type: ActionType.GOT_RESPONSE, responseOK: false, responseMessages: [] });
    });
    test('should return resetFlow action with responseOK=false and responseMessages=[] when params are missmatched types', () => {
      // @ts-ignore
      const action = gotResponse(false, 'undefined');
      expect(action).toMatchObject({ type: ActionType.GOT_RESPONSE, responseOK: false, responseMessages: [] });
    });
  });
});
