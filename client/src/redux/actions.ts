import { ActionRequestSent, ActionGotResponse } from './types';

export const requestSent = (): ActionRequestSent => ({ type: 'REQUEST_SENT' });

export const gotResponse = (responseOK: boolean, responseMessage: string): ActionGotResponse => ({
  type: 'GOT_RESPONSE',
  responseMessage,
  responseOK,
});
