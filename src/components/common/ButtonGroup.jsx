import React, { useState } from 'react';
import { ButtonGroupDiv, StyledButton } from './ButtonGroup.style';

export default function ButtonGroup(props) {
  const [clickedId, setClickedId] = useState(0);

  const handleClick = (id) => {
    setClickedId(id);
    props.doSomethingAfterClick(id);
  };
  return (
    <ButtonGroupDiv>
      {props.buttons.map((buttonLabel, i) => (
        <StyledButton
          key={i}
          color="#3288E5"
          width="150px"
          name={buttonLabel}
          onClick={event => handleClick(i)}
          className={i === clickedId ? '' : 'deactive'}
        >
          {buttonLabel}
        </StyledButton>
      ))}
    </ButtonGroupDiv>
  );
}
