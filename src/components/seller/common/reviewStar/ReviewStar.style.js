import styled from 'styled-components';

const Star = styled.div`
  .review-list__rating {
    display: inline-flex;
    overflow: hidden;
    height: 17px;
    font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    line-height: 1;
    color: #000000;
    text-align: left;
    align-items: baseline;
  }
  .review-list__rating__unit {
    overflow: hidden;
    width: 90px;
    height: 100%;
    background: url('/assets/ic-star-off.svg') no-repeat;
    background-position: left top;
    background-size: 90px 100%;
  }
  .review-list__rating__active {
    display: block;
    width: 90px;
    height: 100%;
    background: url('/assets/ic-star-on.svg') no-repeat;
    background-position: left top;
    background-size: 90px 100%;
  }
`;

export { Star };
