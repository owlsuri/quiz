import axios from 'axios'
import {useState} from 'react'


export default function RestGetPage(){
    const [data, setData] = useState("")

    const callRestAPI = async () =>{
        const result = await axios.get('https://koreanjson.com/users')
        console.log(result)
        setData(result.data.title)
    }


    return(
    <div>
        <div>{data}</div>
        <button onClick={callRestAPI}>REST-API요청하기!</button>
    </div>
    ) 
}