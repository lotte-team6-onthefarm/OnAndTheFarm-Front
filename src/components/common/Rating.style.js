import styled from 'styled-components';

const RatingInputDiv = styled.div`
  width: 100%;
  button {
    font-size: x-large;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .on {
    color: darkorange;
  }
  .off {
    color: lightgray;
  }
`;

const RatingButton = styled.button`
`;

export { RatingInputDiv, RatingButton };
