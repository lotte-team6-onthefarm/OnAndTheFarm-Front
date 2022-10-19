import styled from 'styled-components';

const SalesStatisticsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90%;
`;

const SalesStatisticsBlock = styled.div`
  margin: 10px 0;
  width: 22%;
  height: 200px;
  background-color: ${props => props.theme.colors.gray};
  border-radius: 8px;
  box-shadow: 0px 4px 8px -4px rgb(0 0 0 / 25%),
    inset 0px -1px 1px rgb(0 0 0 / 4%), inset 0px 2px 0px rgb(255 255 255 / 25%);
  position: relative;
  .SalesStatisticsTitle {
    font-size: 20px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .SalesStatisticsCount {
    position: absolute;
    bottom: 30px;
    right: 30px;
    font-size: 60px;
  }
  cursor: pointer;
  :hover {
    .SalesStatisticsTitle {
      font-weight: 600;
    }
  }
`;

export { SalesStatisticsWrapper, SalesStatisticsBlock };
