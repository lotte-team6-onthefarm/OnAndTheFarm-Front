import React from 'react';
import './WellcomeMessage.css';

export default function WellcomeMessage(props) {
  return (
    <div className='wellcome-box'>
      <img
        className="wellcome-logo"
        src="images/onandthefarmlogo.png"
        alt="onandthefarmlogo"
      />
      <p>{props.message}</p>
    </div>
  );
}
