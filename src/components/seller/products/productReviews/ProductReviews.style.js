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
    border-collapse: collapse;
    border-bottom: solid 1px ${props => props.theme.colors.gray};
    vertical-align: top;
  }
  tbody {
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
      width: 80px;
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
    padding-left: 10px;
    div {
      display: flex;
      justify-content: center;
    }
    .review {
      font-weight: 500;
    }
  }
`;

export { ProductReviewsTable, ReviewBlock };
