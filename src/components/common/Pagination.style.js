import styled from 'styled-components';

const PaginationDiv = styled.div`
  display: flex;
`;

const PaginationUl = styled.ul`
  display: inline-block;
  padding-left: 0;
  margin: 20px auto;
  border-radius: 4px;
  li {
    display: inline;
  }

  a {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #000;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid lightgray;
  }
  a:hover{
    cursor: pointer;
  }
  .disabled {
    a {
      color: #777;
      cursor: not-allowed;
      background-color: #fff;
      border-color: #ddd;
    }
  }
  .active {
    a {
      z-index: 2;
      color: #fff;
      cursor: default;
      background-color: #40aa54;
      border-color: lightgray;
    }
  }
`;
const PaginationLi = styled.li``;
const PaginationA = styled.a``;

export { PaginationDiv, PaginationUl, PaginationLi, PaginationA };
