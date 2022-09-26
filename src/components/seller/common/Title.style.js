import styled from 'styled-components';

const SellerTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  padding-bottom: 25px;
`;

const SubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 25px;
`;

const SubTitleBox = styled.div`
  width: 18px;
  height: 35px;
  border-radius: 4px;
  background-color: ${props => props.color};
`;
const SubTitleText = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding-left: 10px;
`;

export { SellerTitle, SubTitleWrapper, SubTitleBox, SubTitleText };
