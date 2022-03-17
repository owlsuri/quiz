
import { useMutation, gql } from '@apollo/client'
import {useState} from 'react'

const CREATE_BOARD = gql`
        mutation{
            createBoard(writer: "임현주", title: "오늘도 어렵네요", contents: "힘내...야지...."){
                _id
                number
                message
            }
        }
`
export default function GraphqlMutationPage(){
    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlAPI = async () =>{

        const result = await callApi() 
        console.log(result)
        console.log(result.data.createBoard.messageresult);
        setData(result.data.createBoard.message)

    }


    return(
    <div>
        <div>{data}</div>
        <button onClick={callGraphqlAPI}>GRAPHQL_API요청하기!</button>
    </div>
    ) 
}