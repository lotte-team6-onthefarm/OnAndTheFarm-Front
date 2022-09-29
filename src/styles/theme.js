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
  gray: '#F2F2F2',
  thickGray: '#707070',
  blue: '#3288E5',
  red: '#FF0000',
  white: '#FFFFFF',
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

export default theme;
