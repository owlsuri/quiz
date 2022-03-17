import { useState } from 'react'
import {Wrap, LocationImg, Header, Title,
        Bar, User, EmailBox, Email, DeleteImg, 
        PasswordBox, Password, Error,
        LoginBtn, LabelBox, Label, LabelDiv,
        KakaoBox, KakaoImg,KakaoText}from '../styles/eatsroad'

export default function eatsRoad(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = () => {
    setPassword(event.target.value)
  }

  const onClickLoginBtn = () => {
        let check = true;
        
        if(email.includes("@") === false){
            setEmailError("이메일이 올바르지 않습니다.")
            check = false;
        } else{
            setEmailError("")
        }

        if(password == ""){
          setPasswordError("비밀번호를 입력해주세요")
          check = false;
        } else{
          setPasswordError("")
        }
  }

    return (
      <Wrap src="/shaian-ramesht-exSEmuA7R7k-unsplash.jpg">
        <Header>
        <LocationImg src="/img-100-logo-white@3x.png"/>
        <Bar></Bar>
        <Title>잇츠로드</Title>
        </Header>
        <User>
          <EmailBox>
            <Email type='text' placeholder="이메일을 입력하세요."/>
            <DeleteImg src="/ic-20-delete-white@2x.png"/>
            <Error>{emailError}</Error>
          </EmailBox>
          <PasswordBox>
            <Password type="password" placeholder="비밀번호를 입력하세요."/>
            <DeleteImg src="/ic-20-delete-white@2x.png"/>
            <Error>{passwordError}</Error>
          </PasswordBox>
          <LoginBtn onClick="">로그인</LoginBtn>
          <LabelBox>
            <Label>이메일 찾기</Label>
            <LabelDiv></LabelDiv>
            <Label>비밀번호 찾기</Label>
            <LabelDiv></LabelDiv>
            <Label>회원가입</Label>
          </LabelBox>
          <KakaoBox>
            <KakaoImg src="/kakao-talk.png"/>
            <KakaoText>카카오톡으로 로그인</KakaoText>
          </KakaoBox>
        </User>
      </Wrap>
    )
  }
