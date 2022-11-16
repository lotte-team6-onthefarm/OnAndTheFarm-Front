import styled from 'styled-components';

const AddDisplayBlockWrapper = styled.div`
  margin-top: 10px;
  height: 700px;
  display: block;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: auto;
  .displayBlockImgDiv {
    display: flex;
    align-items: center;
    margin: 0 20px 0 10px;
    height: 210px;
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
