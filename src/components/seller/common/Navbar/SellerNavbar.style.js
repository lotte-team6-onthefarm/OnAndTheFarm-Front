import styled from 'styled-components';

const Image = styled.img`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 220px;
  cursor: pointer;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  padding-left: 30px;
  padding-right: 30px;
  height: auto;
  background-color: white;
`;

const List = styled.div`
  font-size: 15px;
  cursor: pointer;
  display: flex;
  margin-top: 10px;
  padding-left: 10px;
  border-radius: 5px;
  align-items: center;
  width: 250px;
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
`;

const PlusIcon = styled.div`
  position: absolute;
  top: 225px;
  left: 242px;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid #efefef;
  border-radius: 50%;
  color: #383838;
  font-size: 20px;
  :hover {
    border: 2px solid #383838;
  }
`;

export { Image, Head, List, PlusIcon };
