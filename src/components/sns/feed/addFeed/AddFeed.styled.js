import styled from 'styled-components';

const AddFeedWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const AddFeedBlock = styled.div`
  padding: 0 30px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  textarea {
    margin-top: 20px;
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
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 550px;
    height: 540px;
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
  border: solid red;
  display: flex;
  align-items: center;
  width: 550px;
  margin-top: 20px;
  .tagInput {
    display: inline-block;
    input {
      width: 50px;
      font-size: 16px;
      padding: 10px 4px;
      border: none;
      border: solid blue;
      color: #757575;
      :focus {
        outline: none;
      }
    }
  }
  .addTagList {
    border: solid;
    margin-right: 10px;
  }
`;

export { AddFeedWrapper, AddFeedBlock, ImageUploadWrapper, TagWrapper };
