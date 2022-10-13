import styled from 'styled-components';

const FeedCommentInputWrapper = styled.div`
  margin: 40px 0px 40px;
  padding: 0px;

  .comment_input_outline_inactive {
    color: ${props => props.theme.colors.snsGray};
  }
  .comment_input_outline_active {
    border-color: ${props => props.theme.colors.green};
  }
  .comment_button_inactive {
    color: ${props => props.theme.colors.snsGray};
  }
  .comment_button_active {
    font-weight: 600;
    color: ${props => props.theme.colors.green};
    cursor: pointer;
  }
`;

const CommentTopP = styled.p`
  margin: 0px 0px 16px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  span {
    display: inline-block;
    padding-left: 8px;
    color: rgb(47, 52, 56);
  }
`;

const CommentBottom = styled.div`
  margin-bottom: 40px;
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 16px 0px 24px;
  img {
    width: 30px;
    height: 30px;
    margin-top: 7px;
    margin-right: 12px;
    border-radius: 100%;
    border: 0;
  }
`;

const CommentWrapper = styled.div`
  position: relative;
  flex: 1 0 0%;
  align-items: center;
  line-height: 0;
  box-sizing: border-box;
  border: 1px solid rgb(194, 200, 204);
  border-radius: 4px;
  display: block;
  padding: 0px 16px;
  cursor: text;
  position: relative;
  width: 100%;
  :hover {
    background-color: #f7f7f7;
  }
`;

const CommentBlock = styled.div`
  display: inline-flex;
  line-height: 0;
  box-sizing: border-box;
  border-radius: 4px;
  align-items: flex-start;
  width: 100%;
  padding: 0px;
  border: 0px;
  input {
    word-break: break-word;
    cursor: text;
    display: inline-block;
    margin: 0px;
    border: none;
    background: none;
    font-style: inherit;
    font-variant: inherit;
    font-weight: inherit;
    font-stretch: inherit;
    font-family: inherit;
    color: rgb(47, 52, 56);
    outline: none;
    font-size: 16px;
    line-height: 24px;
    flex: 1 0 0%;
    min-height: 44px;
    padding: 9px 0px;
    box-sizing: border-box;
    resize: none;
    vertical-align: top;
    overflow: hidden;
    height: 44px;
    min-width: 100px;
    ::placeholder {
      color: ${props => props.theme.colors.snsGray};
    }
  }
  div {
    margin-left: 8px;
    display: flex;
    align-items: center;
    height: 24px;
    padding: 9px 0px;
    button {
      display: inline-block;
      margin: 0px 0px 0px 12px;
      border: none;
      background: none transparent;
      font-style: inherit;
      font-variant: inherit;
      font-weight: inherit;
      font-stretch: inherit;
      font-family: inherit;
      height: 30px;
      border-radius: 4px;
      font-size: 16px;
      line-height: 20px;
      flex-shrink: 0;
      padding: 0px;
      margin-left: 0px;
    }
  }
`;

const FeedCommentListWrapper = styled.ul`
  margin: 40px 0px;
  list-style: none;
  li {
    margin-top: 30px;
    :first-of-type {
      margin-top: 0px;
    }
  }
`;

const FeedListBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  a {
    display: flex;
    span {
      margin-left: 10px;
    }
  }
  span {
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: rgb(47, 52, 56);
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
  div {
    display: inline-flex;
    align-items: center;
    padding: 0px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
    font-family: inherit;
    color: rgb(130, 140, 148);
    border: 0px;
    background: none;
  }
  p {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    color: rgb(47, 52, 56);
    overflow-wrap: break-word;
    word-break: keep-all;
    white-space: pre-line;
    margin: 8px 0px;
  }
`;
export {
  FeedCommentInputWrapper,
  CommentTopP,
  CommentBottom,
  CommentWrapper,
  CommentBlock,
  FeedCommentListWrapper,
  FeedListBlock,
};
