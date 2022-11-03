import styled from 'styled-components';

const ProductStatisticsTable = styled.table`
  margin-top: 20px;
  border-collapse: collapse;
  th {
    text-align: left;
    font-size: 13px;
    color: #6f767e;
  }
  th,
  td {
    padding: 16px 12px;
    font-weight: 600;
    border-collapse: collapse;
    border-bottom: solid 1px ${props => props.theme.colors.gray};
    vertical-align: top;
  }
  tbody {
    :hover {
      background-color: ${props => props.theme.colors.gray};
      .title {
        div {
          color: #3288e5;
        }
      }
      .updateBtn {
        display: flex;
        align-items: center;
        padding-top: 15px;
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          width: 38px;
          height: 38px;
          border-radius: 19px;
          background-color: white;
          color: gray;
          :hover {
            cursor: pointer;
            color: ${props => props.theme.colors.blue};
          }
        }
      }
    }
  }
  .title {
    font-size: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    div {
      padding-left: 20px;
    }
    img {
      width: 90px;
      height: 90px;
      border-radius: 8px;
      object-fit: cover;
    }
  }
  .updateBtn {
    display: none;
  }
`;

const ProductStatisticsButton = styled.button`
  width: 100px;
  padding: 5px;
  border-radius: 3px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.thickGray};
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const StatusTd = styled.div`
  display: inline-block;
  padding: 5px 8px;
  border-radius: 8px;
  color: ${props => (props.status === 1 ? '#83BF6E' : '#FF6A55')};
  background-color: ${props => (props.status === 1 ? '#EAFAE5' : '#FFE7E4')};
  font-size: 12px;
  font-weight: 550;
`;
const UpdateBtnWrapper = styled.div``;

export {
  ProductStatisticsTable,
  StatusTd,
  ProductStatisticsButton,
  UpdateBtnWrapper,
};
