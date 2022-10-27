import styled from 'styled-components';

const SearchInputDiv = styled.div`
  position: relative;
  width: ${props => (props.width ? props.width : '100%')};
  /* margin: 20px auto; */
  margin-left: auto;
  display: flex;
  align-items: center;
  text-align: start;
  svg {
    position: absolute;
    color: #fff;
    right: 0;
    background-color: #40aa54;
    width: 40px;
    height: 40px;
    padding: 0 1rem;
    border-radius: 100px;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 80px 0 15px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 100px;
`;

export { SearchInputDiv, SearchInput };
