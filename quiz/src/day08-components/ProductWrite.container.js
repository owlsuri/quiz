// import axios from 'axios'
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queries";
import  ProductWriteUI  from './ProductWrite.presenter'
import { printIntrospectionSchema } from "graphql";

export default function ProductWrite(props) {
  const router = useRouter();

  const [data, setData] = useState("");

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const [callApi] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  //등록하기
  const onClickWrite = async () => {
    try {
      const result = await callApi({
        variables: { seller, createProductInput: { name, detail, price } },
      }); //try는여기서 실패하면 catch로 점프한다.
      console.log(result);
      setData(result.data.createProduct.message);
      alert("상품 등록 완료 :D");
      alert("상세페이지로 이동할까요?");

      router.push(`/day8-quiz/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };
//수정하기
  const onClickUpdate = async () => {
    const result = await updateProduct({
        variables:{ productId: router.query.productId, updateProductInput: {name, detail, price} },
    })
        alert("게시글 수정 성공!");
        router.push(`/day8-quiz/${router.query.productId}`);
  }


  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(parseInt(event.target.value));
  };

  return (
    <ProductWriteUI
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickUpdate={onClickUpdate}
      onClickWrite={onClickWrite}
      isEdit={props.isEdit}
    />
  );
}
