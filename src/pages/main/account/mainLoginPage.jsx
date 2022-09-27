import { React, useState } from 'react';
import WellcomeMessage from '../../../components/main/WellcomeMessage';
import Input from '../../../components/common/Input';
import { StyledBoxDiv, StyledRowDiv, StyledFind } from './mainLoginPage.style';
import { Button } from '../../../components/common/Button';

export default function MainLoginPage() {
  const [useremail, setUseremail] = useState('');
  const [userpassword, setPassword] = useState('');

  return (
    <StyledBoxDiv>
      <WellcomeMessage message="OnAndTheFarm에 오신것을 환영합니다." />
      <Input
        value={useremail}
        onChange={e => setUseremail(e.target.value)}
        label="이메일"
        placeholder="test@email.com"
        id="email"
        type="email"
      />
      <Input
        value={userpassword}
        onChange={e => setPassword(e.target.value)}
        label="비밀번호"
        placeholder="******"
        id="password"
        type="password"
      />
      <StyledRowDiv position="end">
        <StyledFind href="#">아이디찾기</StyledFind>
        <StyledFind href="#">비밀번호 찾기</StyledFind>
      </StyledRowDiv>
      <StyledRowDiv position="center" style={{display:"flex"}}>
        <Button text="로그인" color="#40AA54" width="130px"></Button>
        <Button text="회원가입" color="#3288E5" width="130px"></Button>
      </StyledRowDiv>
      
    </StyledBoxDiv>
  );
}
