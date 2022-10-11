import { React } from 'react';
import WellcomeMessage from '../../components/main/WellcomeMessage';
import { StyledBoxDiv } from './successPage.style';

export default function SuccessPage() {
  return (
    <StyledBoxDiv>
      <WellcomeMessage message="주문이 완료되었습니다. 마이페이지에서 확인해주세요" />
      
    </StyledBoxDiv>
  );
}
