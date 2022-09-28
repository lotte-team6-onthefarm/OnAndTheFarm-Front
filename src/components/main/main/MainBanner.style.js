import styled from 'styled-components';
import mainImage from './mainImage.png';

const MainBannerDiv = styled.div`
width: 1130px;
height: 580px;
display: flex;
align-items: center;
justify-content: end;
background-image: url(${mainImage});
background-size: cover;
p{
  color: #fff;
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 5px 10px;
}
div{
  width: 40%;
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