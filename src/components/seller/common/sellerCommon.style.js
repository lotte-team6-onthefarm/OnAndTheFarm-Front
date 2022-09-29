import styled from 'styled-components';

const UpDownBox = styled.div`
  padding: 5px;
  border-radius: 8px;
  font-weight: 500;
  color: ${props =>
    props.state === '0' ? '#FF6A55' : '#83BF6E'}; // - 일때 0 + 일때 1
  background-color: ${props =>
    props.state === '0' ? '#FFE7E4' : '#EAFAE5'}; // - 일때 0 + 일때 1
`;

const BlackBorderButton = styled.button`
  margin-top: 10px;
  background: white;
  border: none;
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  :hover {
    background: none;
    cursor: pointer;
    border-radius: 8px;
    border: solid 2px black;
  }
`;

const UserImgWrapper = styled.img`
  width: ${props => props.width};
  border-radius: 50%;
`;

export { UpDownBox, BlackBorderButton, UserImgWrapper };
