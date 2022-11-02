import styled from 'styled-components';

const ProductReviewsTable = styled.table`
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
    vertical-align: top;
  }
  tr {
    border-collapse: collapse;
    border-bottom: solid 1px ${props => props.theme.colors.gray};
  }
  .selectedTbody {
    :hover {
      background-color: white;
    }
  }
  tbody {
    .answer {
      display: none;
    }
    :hover {
      .answer {
        display: block;
      }
    }
    .selected {
      display: block;
    }
    tr {
      height: 130px;
    }
    :hover {
      background-color: ${props => props.theme.colors.gray};
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
      border-radius: 8px;
    }
  }
`;

const ReviewBlock = styled.div`
  display: flex;
  align-items: center;
  div {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding-left: 10px; */
    div {
      display: flex;
      justify-content: center;
    }
    .review {
      font-weight: 500;
    }
  }
  .time {
    color: gray;
    font-weight: 100;
    margin-left: auto;
  }
  .productReviewsImg {
    margin-right: 10px;
  }
  .productQnAsdiv {
    div:nth-child(1) {
      margin-bottom: 10px;
    }
    .review {
      word-break: break-all;
    }
  }
`;

export { ProductReviewsTable, ReviewBlock };
