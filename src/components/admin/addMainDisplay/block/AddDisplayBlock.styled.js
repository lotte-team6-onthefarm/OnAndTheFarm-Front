import styled from 'styled-components';

const AddDisplayBlockWrapper = styled.div`
  margin-top: 10px;
  height: 380px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: auto;
  .displayBlockImgDiv {
    margin-top: 10px;
    margin-right: 10px;
    width: 350px;
    height: 210px;
    /* border: solid 1px gray; */
    position: relative;
    padding: 10px;
    overflow: hidden;
  }
  .displayBlockTitle {
    background-color: gray;
    padding: 0 3px;
    color: white;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  img {
    width: 100%;
    border-radius: 4px;
    object-fit: cover;
    transition: all 0.1s linear;
    :hover {
      cursor: pointer;
      scale: calc(1.02);
    }
  }
`;

export { AddDisplayBlockWrapper };
