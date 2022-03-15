import {useState} from 'react'

export default function Day2Quiz02State(){

    const [count,setCount] = useState(0)

function onClickCounter(){
    setCount(count + 1)
}

    return(
        <div>
            <div>{count}</div>
            <button onClick={onClickCounter}>카운트증가</button>
        </div>
    )
}