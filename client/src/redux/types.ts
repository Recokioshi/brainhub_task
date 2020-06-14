export type State = {
  responseMessage: string;
  responseOK: boolean;
};

export type GOT_RESPONSE = 'GOT_RESPONSE';
export type REQUEST_SENT = 'REQUEST_SENT';

export type ActionType = GOT_RESPONSE | REQUEST_SENT;

export type ActionGotResponse = { type: GOT_RESPONSE; responseMessage: string; responseOK: boolean };
export type ActionRequestSent = { type: REQUEST_SENT };

export type Action = ActionGotResponse | ActionRequestSent;
