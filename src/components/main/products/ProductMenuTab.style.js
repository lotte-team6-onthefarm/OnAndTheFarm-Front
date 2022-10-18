import styled from 'styled-components';

const DeliveryButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  color: #cccccc;
  div {
    font-size: 18px;
    margin: 0 50px;
    cursor: pointer;
    :nth-child(1) {
      color: ${props => props.state === '0' && 'black'};
    }
    :nth-child(2) {
      color: ${props => props.state === '1' && 'black'};
    }
    :nth-child(3) {
      color: ${props => props.state === '2' && 'black'};
    }
  }
`;

export { DeliveryButtonWrapper };
