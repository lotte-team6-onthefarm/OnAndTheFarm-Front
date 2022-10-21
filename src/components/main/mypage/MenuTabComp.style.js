import styled from 'styled-components';

const MenuTabDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const DeliveryButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px 20px;
  color: #cccccc;
  div {
    display: flex;
    font-size: 18px;
    font-weight: ${props => (props.state === props.idx ? 600 : '')};
    cursor: pointer;
    color: ${props => (props.state === props.idx ? 'black' : '#cccccc')};
  }
`;

export { MenuTabDiv, DeliveryButtonWrapper };
