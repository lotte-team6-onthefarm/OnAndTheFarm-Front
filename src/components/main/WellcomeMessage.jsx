import React from 'react';
import onandthefarmlogo from '../../assets/logo.png';
import { WellcomeBox, LogoImg } from './WellcomeMessage.style';

export default function WellcomeMessage(props) {
  return (
    <WellcomeBox>
      <LogoImg src={onandthefarmlogo} alt="onandthefarmlogo"></LogoImg>
      <p>{props.message}</p>
    </WellcomeBox>
  );
}
