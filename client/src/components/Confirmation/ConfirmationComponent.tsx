import React from 'react';
import { ConfirmationProps } from './ConfirmationTypes';

const Confirmation: React.FC<ConfirmationProps> = ({ resetFlow }) => (
  <div>
    <div>You have successfully submitted to our event!</div>
    <button onClick={resetFlow}>Submit form again</button>
  </div>
);

export default Confirmation;
