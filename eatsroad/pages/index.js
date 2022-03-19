import { useState } from 'react'
import {
  Container, Wrap,
  LocationImg,
  Header,
  Title,
  Bar,
  User,
  EmailBox,
  Email,
  DeleteImg,
  PasswordBox,
  Password,
  Error,
  LoginBtn,
  LabelBox,
  Label,
  LabelDiv,
  KakaoBox,
  KakaoImg,
  KakaoText,
} from "../styles/eatsroad";

export default function eatsRoad(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onClickLoginBtn = () => {
        let check = true;
        
        if(email.includes("@") === false){
            setEmailError("이메일 주소를 다시 확인해주세요.")
            check = false;
        } else{
            setEmailError("")
        }

        if(password == "" || password.length < 8){
          setPasswordError("8~16자의 영문, 숫자, 특수문자만 사용 가능합니다.")
          check = false;
        } else{
          setPasswordError("")
        }
        if(check === true){
          alert("환영합니다!")
        }
  }

    return (
      <Container>
        <Wrap>
          <Header>
            <LocationImg src="/img-100-logo-white@3x.png" />
            <Bar></Bar>
          </Header>
          <Title>잇츠로드</Title>
          <User>
            <EmailBox>
              <Email
                type="text"
                placeholder="이메일을 입력하세요."
                onChange={onChangeEmail}
              />
              <DeleteImg
                src="/ic-20-delete-white@2x.png" />
            </EmailBox>
            <Error>{emailError}</Error>
            <PasswordBox>
              <Password
                type="password"
                placeholder="비밀번호를 입력하세요."
                onChange={onChangePassword}
              />
              <DeleteImg src="/ic-20-delete-white@2x.png" />
            </PasswordBox>
            <Error>{passwordError}</Error>
            <LoginBtn onClick={onClickLoginBtn}>로그인</LoginBtn>
            <LabelBox>
              <Label>이메일 찾기</Label>
              <LabelDiv></LabelDiv>
              <Label>비밀번호 찾기</Label>
              <LabelDiv></LabelDiv>
              <Label>회원가입</Label>
            </LabelBox>
            <KakaoBox>
              <KakaoImg src="/kakao-talk.png" />
              <KakaoText>카카오톡으로 로그인</KakaoText>
            </KakaoBox>
          </User>
        </Wrap>
      </Container>
    );
  }
