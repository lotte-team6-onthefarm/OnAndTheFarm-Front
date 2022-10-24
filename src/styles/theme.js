import styled from 'styled-components';

const size = {
  mobile: '480px',
  tablet: '768px',
  laptopS: '900px',
  laptopM: '1239px',
  desktop: '1240px',
};
const flex = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptopS: `(max-width: ${size.laptopS})`,
  laptopM: `(max-width: ${size.laptopM})`,
  desktop: `(min-width: ${size.desktop})`,
};

const colors = {
  green: '#40AA54',
  lightGreen: '#D5F0DB',
  logoGreen: '#16B51E',
  gray: '#F2F2F2',
  thickGray: '#707070',
  blue: '#3288E5',
  red: '#FF0000',
  white: '#FFFFFF',
  snsGray: '#d7d7d7',
};

const subTitleColors = {
  orange: '#FFBC99',
  blue: '#B1E5FC',
  purple: '#CABDFF',
  green: '#B5E4CA',
};

const theme = {
  ...flex,
  colors,
  subTitleColors,
};

export const UserMaxWrapper = styled.div`
  width: 1130px;
  padding: 20px 30px;
  margin: 0 auto;
`;

export default theme;
