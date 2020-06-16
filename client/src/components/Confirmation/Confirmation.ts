import Confirmation from './ConfirmationComponent';
import { connect } from 'react-redux';
import { State } from '../../redux/types';
import { ConfirmationStateProps, ConfirmationDispatchProps } from './ConfirmationTypes';
import { Dispatch } from 'redux';
import { resetFlow } from '../../redux/actions';

const mapStateToProps = (state: State): ConfirmationStateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): ConfirmationDispatchProps => ({
  resetFlow: () => {
    dispatch(resetFlow());
  },
});

export default connect<ConfirmationStateProps, ConfirmationDispatchProps, {}, State>(
  mapStateToProps,
  mapDispatchToProps,
)(Confirmation);
