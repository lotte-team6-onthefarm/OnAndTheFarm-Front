import styled from 'styled-components';

const FeedTagWrapper = styled.div`
  margin: 24px 0px 40px;
  padding: 0px;
  button {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.3px;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 0px;
    border: 0px;
    /* color: rgb(53, 197, 240); */
    color: ${props => props.theme.colors.green};
    vertical-align: middle;
    background: none;
    cursor: pointer;
  }
`;

export { FeedTagWrapper };
