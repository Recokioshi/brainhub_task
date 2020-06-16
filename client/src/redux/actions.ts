import { ActionRequestSent, ActionGotResponse, ActionResetFlow, ActionType } from './types';

export const requestSent = (): ActionRequestSent => ({ type: ActionType.REQUEST_SENT });

export const resetFlow = (): ActionResetFlow => ({ type: ActionType.RESET_FLOW });

export const gotResponse = (responseOK: boolean, responseMessages: string[]): ActionGotResponse => ({
  type: ActionType.GOT_RESPONSE,
  responseMessages,
  responseOK,
});
