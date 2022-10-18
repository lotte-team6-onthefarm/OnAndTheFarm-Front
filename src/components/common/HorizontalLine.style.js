import styled from 'styled-components';

const HorizontalLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.color};
  line-height: 0.1em;
  margin: 20px 0;
`;

export { HorizontalLine };
