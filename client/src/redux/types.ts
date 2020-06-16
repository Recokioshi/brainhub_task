export enum FormState {
  ENTERED,
  REQUEST_SENT,
  GOT_RESPONSE,
}

export type State = {
  responseMessages: string[];
  responseOK: boolean;
  formState: FormState;
};

export enum ActionType {
  GOT_RESPONSE,
  REQUEST_SENT,
  RESET_FLOW,
}

export type ActionGotResponse = { type: ActionType.GOT_RESPONSE; responseMessages: string[]; responseOK: boolean };
export type ActionRequestSent = { type: ActionType.REQUEST_SENT };
export type ActionResetFlow = { type: ActionType.RESET_FLOW };

export type Action = ActionGotResponse | ActionRequestSent | ActionResetFlow;
