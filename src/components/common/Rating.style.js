import styled from 'styled-components';

const RatingInputDiv = styled.div`
  width: 100%;
  button {
    font-size: ${props => (props.font ? props.font : 'x-large')};
    background-color: transparent;
    border: none;
    outline: none;
    cursor: ${props => (props.rate ? '' : 'pointer')};
  }
  .on {
    color: darkorange;
  }
  .off {
    color: lightgray;
  }
`;

const RatingButton = styled.button``;

export { RatingInputDiv, RatingButton };
