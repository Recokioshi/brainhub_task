import { onFormSubmit } from '../EventForm';
let actions = require('../../../redux/actions');
let apiServices = require('../../../services/apiServices');

describe('EventForm', () => {
  describe('dispatches requestSent action and passes result of submitForm to the gotResponse action', () => {
    const date = new Date();
    const dispatch = jest.fn();
    actions.requestSent = jest.fn();
    actions.gotResponse = jest.fn((responseOK: boolean, responseMessages: string[]) => {});
    apiServices.submitForm = jest.fn(() => ({ responseOK: true, responseMessage: '' }));
    onFormSubmit(dispatch)({ name: 'A', surname: 'B', email: 'AAA@BBB.com', eventDate: date });
    test('dispatch is called twice', () => {
      expect(dispatch.mock.calls.length === 2);
    });
    test('requestSent is called once', () => {
      expect(actions.requestSent.mock.calls.length).toBe(1);
    });
    test('submitForm is called once', () => {
      expect(apiServices.submitForm.mock.calls.length).toBe(1);
    });
    test('submitForm is called with init params', () => {
      expect(apiServices.submitForm.mock.calls[0][0]).toBe('A');
      expect(apiServices.submitForm.mock.calls[0][1]).toBe('B');
      expect(apiServices.submitForm.mock.calls[0][2]).toBe('AAA@BBB.com');
      expect(apiServices.submitForm.mock.calls[0][3]).toBe(date);
    });
    test('gotResponse is called once', () => {
      expect(actions.gotResponse.mock.calls.length).toBe(1);
    });
    test('gotResponse got params', () => {
      expect(actions.gotResponse.mock.calls[0][0]).toBe(true);
      expect(actions.gotResponse.mock.calls[0][1]).toHaveLength(0);
    });
  });
});
