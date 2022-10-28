import styled from 'styled-components';

const SnsMainWrapper = styled.div`
  margin: 30px auto;
  max-width: 1130px;
  flex-wrap: wrap;
`;

const SelectWrapper = styled.div`
  margin: 20px 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  button {
    width: 90px;
    height: 40px;
    padding: 5px;
    margin: 0 10px;
    background: #f1f1f1;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
    color: #757575;
  }
  button:hover {
    font-size: 16px;
  }
`;

const FeedDetailWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export { SnsMainWrapper, SelectWrapper, FeedDetailWrapper };
