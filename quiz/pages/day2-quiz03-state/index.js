import {useState} from 'react'

export default function Day2Quiz03State(){

    const [auth,setAuth] = useState("000000")

function onClickAuth(){
    setAuth(String(Math.floor(Math.random()*1000000)).padStart(6,"0"))
}

    return(
        <div>
            <div>{auth}</div>
            <button onClick={onClickAuth}>인증번호전송</button>
        </div>
    )
}