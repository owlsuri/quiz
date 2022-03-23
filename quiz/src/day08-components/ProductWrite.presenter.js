export default function ProductWriteUI(props) {
  return (
    <div>
        <h1>{props.isEdit ? "수정" : "상품등록"}하기</h1>
      판매자 : <input type="text" onChange={props.onChangeSeller} />
      <br />
      상품명 : <input type="text" onChange={props.onChangeName} /> <br />
      상품내용 : <input type="text" onChange={props.onChangeDetail} /> <br />
      상품가격 : <input type="number" onChange={props.onChangePrice} /> <br />
      <button onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}>상품 {props.isEdit ? "수정" : "등록"}하기</button>
    </div>
  );
}
