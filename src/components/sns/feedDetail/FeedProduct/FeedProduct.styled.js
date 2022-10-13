import styled from 'styled-components';

const FeedProductWrapper = styled.div`
  margin-top: 8px;
  ul {
    padding: 0px;
    scroll-padding: 0px;
    display: flex;
    margin: 0px;
    overflow: hidden;
    list-style: none;
  }
  li {
    margin: 0px 8px 0px 0px;
    padding: 0px;
    flex-shrink: 0;
    scroll-snap-align: start;
    display: list-item;
    div {
      position: relative;
      display: block;
      a {
        display: flex;
        flex-direction: column;
        margin-top: 12px;
        max-width: 100px;
        cursor: pointer;
        touch-action: manipulation;
        color: inherit;
        text-decoration: none;
        div {
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
          width: 100px;
          height: 100px;
          border-radius: 32px;
          border: solid;
          border-color: white;
          transition: 0.2s ease-in-out 0s;
          :hover {
            border-color: ${props => props.theme.colors.green};
          }
          img {
            width: 100%;
            transition: 0.2s ease-in-out 0s;
            :hover {
              transform: scale(1.05);
            }
          }
        }
      }
    }
  }
`;

export { FeedProductWrapper };
