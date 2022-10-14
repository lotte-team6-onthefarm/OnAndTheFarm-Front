import styled from 'styled-components';

const GRButtonWrapper = styled.div`
  display: inline-block;
  padding: 5px 8px;
  border-radius: 8px;
  color: ${props => props.status === 1 && '#83BF6E'};
  color: ${props => props.status === 2 && '#ffaa00'};
  color: ${props => props.status === 3 && '#FF6A55'};
  background-color: ${props => props.status === 1 && '#EAFAE5'};
  background-color: ${props => props.status === 2 && '#fcf2dc'};
  background-color: ${props => props.status === 3 && '#FFE7E4'};
  font-size: ${props => props.fontSize};
  font-weight: 550;
`;

const GPButtonWrapper = styled.div`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 8px;
  color: ${props => props.status === 1 && '#83BF6E'};
  color: ${props => props.status === 2 && '#ffaa00'};
  color: ${props => props.status === 3 && 'white'};
  background-color: ${props => props.status === 1 && '#EAFAE5'};
  background-color: ${props => props.status === 2 && '#FFE7E4'};
  background-color: ${props => props.status === 3 && 'black'};
  font-size: ${props => props.fontSize};
  font-weight: 550;
`;

const BWButtonWrapper = styled.div`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 8px;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  font-size: ${props => props.fontSize};
  font-weight: 550;
`;

export { GRButtonWrapper, GPButtonWrapper, BWButtonWrapper };
