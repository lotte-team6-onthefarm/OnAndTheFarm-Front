import styled from 'styled-components';

const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  .selectedMypageMenu {
    color: black;
  }
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
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 45px;
  font-weight: 550;
  color: gray;
  :hover {
    color: black;
  }
  .icons {
    font-size: 30px;
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  .right {
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
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
