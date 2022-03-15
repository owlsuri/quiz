import {useState} from 'react'

export default function Day2Quiz04Signup(){

    const [email,setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [password,setPassword] = useState("")
    const [passwordAgain,setPasswordAgain] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    function onChangePasswordAgain(event){
        setPasswordAgain(event.target.value)        
    }

    function onClickSignup(){

        let check = true;
        
        if(email.includes("@") === false){
            setEmailError("이메일이 올바르지 않습니다!! @가 없음!!")
            check = false;
        } else{
            setEmailError("")
        }
        if(password !== passwordAgain){
            setPasswordError("비밀번호가 일치하지 않습니다.")
            check = false;
        }
        if(check===true){
            alert("회원가입을 환영합니다!")
        }
    }

    return(
        <div>
            이메일 : <input type={'text'} onChange={onChangeEmail}/><br/>
            <div color={'red'}>{emailError}</div>
            비밀번호 : <input type={'password'} onChange={onChangePassword}/><br/>
            비밀번호 확인 : <input type={'password'} onChange={onChangePasswordAgain}/><br/>
            <div color={'red'}>{passwordError}</div>
            <button onClick={onClickSignup}>가입하기</button>
        </div>
    )
}