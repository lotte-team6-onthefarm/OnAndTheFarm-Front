import styled from 'styled-components';
import mainImage from './mainImage2.png';

const MainBannerDiv = styled.div`
  width: 1130px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: end;
  background-image: url(${mainImage});
  background-size: contain;
  background-repeat: no-repeat;
  p {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0 0 5px 10px;
  }
  div {
    margin-right: 30px;
  }
`;

const SearchInput = styled.input`
  width: calc(100% - 15px);
  height: 40px;
  margin-top: 5px;
  padding-left: 15px;
  background-color: #f7f7f7;
  border: none;
  border-radius: 20px;
`;

export { MainBannerDiv, SearchInput };
