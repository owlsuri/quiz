import {useState} from 'react'

export default function Day2Quiz01State(){

    const [state,setState] = useState("안녕하세요!")

function onClickHi(){
    setState("반갑습니다:D")
}

    return(
        <button onClick={onClickHi}>{state}</button>
    )
}