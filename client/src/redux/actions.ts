import { ActionRequestSent, ActionGotResponse, ActionResetFlow, ActionType } from './types';

export const requestSent = (): ActionRequestSent => ({ type: ActionType.REQUEST_SENT });

export const resetFlow = (): ActionResetFlow => ({ type: ActionType.RESET_FLOW });

export const gotResponse = (responseOK: boolean = false, responseMessages: string[] = []): ActionGotResponse => ({
  type: ActionType.GOT_RESPONSE,
  responseMessages: Array.isArray(responseMessages) ? responseMessages : [],
  responseOK: typeof responseOK === 'boolean' ? responseOK : false,
});
