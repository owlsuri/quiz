import {FETCH_BOARD} from './day6-quiz2.queries'
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardShowUI from './day6-quiz02.presenter';


export default function BoardShow() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  console.log(data);

  return (
     <BoardShowUI 
     data={data}/>
  );
}
