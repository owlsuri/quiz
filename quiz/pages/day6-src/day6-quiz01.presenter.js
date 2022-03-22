import * as S from './day6-quiz01.styles'

export default function BoardWriteUI(props) {
  return (
    <div>
      {/* <div>{data}</div> */}
      작성자 : <input type={"text"} onChange={props.onChangeWriter} />
      <br />
      제목 : <input type={"text"} onChange={props.onChangeTitle} />
      <br />
      내용 : <input type={"text"} onChange={props.onChangeContents} />
      <br />
      {props.data}
      <br />
      <S.SubmitButton isActive={props.isActive} onClick={props.callGraphqlAPI}>CREATE BOARD</S.SubmitButton>
    </div>
  );
}
