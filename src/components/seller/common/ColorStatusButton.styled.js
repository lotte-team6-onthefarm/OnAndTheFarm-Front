import styled from 'styled-components';

const GRButtonWrapper = styled.div`
  display: inline-block;
  padding: 5px 8px;
  border-radius: 8px;
  color: ${props => (props.status === 1 ? '#83BF6E' : '#FF6A55')};
  background-color: ${props => (props.status === 1 ? '#EAFAE5' : '#FFE7E4')};
  font-size: ${props => props.fontSize};
  font-weight: 550;
`;

const GPButtonWrapper = styled.div`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 8px;
  background-color: ${props =>
    props.status === 'os1' ? '#B5E4CA' : '#CABDFF'};
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