import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {CREATE_BOARD} from './day6-quiz01.queries'
import BoardWriteUI from './day6-quiz01.presenter'

export default function BoardWrite() {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false)

  const [data, setData] = useState("");

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [callApi] = useMutation(CREATE_BOARD);

  //가져오기를 시도하는 것

  const callGraphqlAPI = async () => {
    try {
      const result = await callApi({
        variables: { writer: writer, title: title, contents: contents },
      }); //try는여기서 실패하면 catch로 점프한다.
      console.log(result);
      setData(result.data.createBoard.message);
      alert("게시글 등록 성공!");
      alert("상세페이지로 이동할까요?");
      // 백틱안에 쓸땐 변수앞에 $를 붙인다. 템플릿 리터럴
      router.push(
        `/day6-quiz02/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };

 const onChangeWriter = (event) => {
    setWriter(event.target.value);

    if (event.target.value !== "" && title !== "" && contents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    };

    const onChangeTitle = (event) => {
    setTitle(event.target.value);

    if (writer !== "" && event.target.value !== "" && contents !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    };

    const onChangeContents = (event) => {
    setContents(event.target.value);

    if (writer !== "" && title !== "" && event.target.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    };

    return (
      <BoardWriteUI
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        callGraphqlAPI={callGraphqlAPI}
        isActive={isActive}
        data={data}
      />
    ); 
}