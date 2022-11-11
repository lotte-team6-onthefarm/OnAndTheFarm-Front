import styled from 'styled-components';

const AddFeedNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  border-bottom: solid 2px #f2f2f2;
  margin: 21px auto;
  height: 80px;
  button {
    margin: 0;
    font-size: 17.6px;
  }
`;
const AddFeedWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const AddFeedBlock = styled.div`
  position: relative;
  padding: 0 30px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    width: 550px;
    margin-bottom: 20px;
    align-items: flex-start;
  }
  textarea {
    margin-top: 40px;
    width: 520px;
    resize: none;
    overflow-wrap: break-word;
    min-height: 145px;
    padding: 10px 15px;
    border: solid 1px rgb(219, 219, 219);
    border-radius: 4px;
    font-size: 15px;
    :hover {
      background-color: rgba(247, 248, 250, 0.6);
    }
    :focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(9, 230, 46, 0.5);
    }
  }
`;

const ImageUploadWrapper = styled.div`
  width: 550px;
  height: 540px;
  .feedUploadButton {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgb(247, 248, 250);
    border: 1px dashed rgb(218, 220, 224);
    border-radius: 4px;
    cursor: pointer;
  }
  .feeduploadIcon {
    font-size: 100px;
    color: rgb(130, 140, 148);
  }
  .feeduploadTitle {
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
    color: rgb(130, 140, 148);
  }
  .feeduploaddetail {
    font-size: 16px;
    margin-top: 10px;
    color: rgb(130, 140, 148);
  }
  :hover {
    div {
      color: rgba(130, 140, 148, 0.6);
    }
  }
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 550px;
  margin: 20px 0;
  .tagInput {
    display: inline-block;
    input {
      width: 100px;
      font-size: 16px;
      padding: 0 4px;
      border: none;
      color: #757575;
      :focus {
        outline: none;
      }
    }
  }
  .addTagList {
    margin-right: 10px;
  }
`;

const AddFeedProductListWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  h3 {
    box-sizing: border-box;
    width: 100%;
    padding-left: 20px;
    text-align: left;
  }
  .feedProductListBlock {
    box-sizing: border-box;
    width: 375px;
    padding: 0 20px;
    :nth-child(n + 2) {
      margin-top: 20px;
    }
    display: flex;
    align-items: center;
    button {
    }
  }
  .feedProductListDetail {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 186px;
    margin-right: 10px;
    div {
      font-size: 13px;
      :nth-child(1) {
        font-weight: bold;
        font-size: 11px;
        margin-bottom: 5px;
      }
      :nth-child(2) {
        word-wrap: break-word;
      }
    }
  }
  img {
    width: 70px;
    height: 70px;
    border-radius: 22px;
    margin-right: 15px;
  }
`;

const AddFeedCarouselImgDiv = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex !important;
  align-items: center;
  justify-content: center;
  div {
    position: absolute;
  }
`;

const AddFeedCarouselImg = styled.img`
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export {
  AddFeedNavbar,
  AddFeedWrapper,
  AddFeedBlock,
  ImageUploadWrapper,
  TagWrapper,
  AddFeedProductListWrapper,
  AddFeedCarouselImgDiv,
  AddFeedCarouselImg,
};
