import styled from 'styled-components';
const StyledBoxWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background-color: ${props => props.theme.colors.gray};
`;
const StyledBoxDiv = styled.div`
  padding: 50px 50px;
  background-color: white;
  width: 400px;
  margin: 50px auto;
  justify-content: center;
  text-align: center;
  border: 1px solid #d6dbe2;
`;

const StyledRowDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 20px auto;
  justify-content: ${props => props.position};
`;

const StyledFind = styled.a`
  margin-right: 15px;
`;

const StoreLogoImg = styled.img`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  width: 400px;
`;

export {
  StyledBoxWrapper,
  StyledBoxDiv,
  StyledRowDiv,
  StyledFind,
  StoreLogoImg,
};
