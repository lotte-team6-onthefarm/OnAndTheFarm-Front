import styled from 'styled-components';

const AddDisplayBlockWrapper = styled.div`
  margin-top: 10px;
  height: 380px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: auto;
  .displayBlockImgDiv {
    border: solid white;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-right: 10px;
    width: 350px;
    height: 210px;
    position: relative;
    padding: 10px;
    overflow: hidden;
  }
  .displayBlockImgDivActive {
    border: solid ${props => props.theme.colors.thickGray};
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-right: 10px;
    width: 350px;
    height: 210px;
    position: relative;
    padding: 10px;
    overflow: hidden;
  }
  .displayBlockTitle {
    background-color: ${props => props.theme.colors.gray};
    padding: 1px 5px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  /* .displayBlockTitleActive {
    background-color: ${props => props.theme.colors.thickGray};
    font-weight: 600;
    color: white;
    padding: 1px 5px;
    position: absolute;
    bottom: 0;
    right: 0;
  } */
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
