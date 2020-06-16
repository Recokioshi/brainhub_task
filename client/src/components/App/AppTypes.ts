import { FormState } from '../../redux/types';

export type AppStateProps = { formState: FormState; responseOK: boolean };

export type AppDispatchProps = {};

export type AppProps = AppStateProps & AppDispatchProps;
