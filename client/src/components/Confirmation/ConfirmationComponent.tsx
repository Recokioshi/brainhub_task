import React from 'react';
import { ConfirmationProps } from './ConfirmationTypes';
import './Confirmation.scss';

const Confirmation: React.FC<ConfirmationProps> = ({ resetFlow }) => (
  <div className="confirmation-wrapper">
    <h1>You have successfully submitted to our event!</h1>
    <button onClick={resetFlow}>Submit form again</button>
  </div>
);

export default Confirmation;
