import styled from 'styled-components';


const NavbarDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const SubListWrapper = styled.div`
  display: ${props => (props.productSub === false ? 'none' : 'block')};
`;

const ListWrapper = styled.div`
  font-size: 15px;
  cursor: pointer;
  display: flex;
  margin-top: 10px;
  padding-left: 20px;
  border-radius: 5px;
  align-items: center;
  width: 270px;
  height: 45px;
  font-weight: 550;
  color: ${props => (props.check === '1' ? 'black' : 'gray')};
  background-color: ${props => props.color};
  box-shadow: ${props =>
    props.check === '1' ? '0 5px 5px -5px gray' : 'none'};
  :hover {
    color: black;
  }
  .icons {
    font-size: 22px;
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  .right {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icons {
      font-size: 25px;
      transition: all ease 0.2s;
      transform: ${props =>
        props.productSub === false ? '' : 'rotate(180deg)'};
    }
  }
`;


export { NavbarDiv, ListWrapper, SubListWrapper };
