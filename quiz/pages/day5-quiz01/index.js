// import axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from 'react';

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
        _id
        number
        message
        }
    }
`;
    export default function GraphqlMutationPage() {
        const router = useRouter();

        const [data, setData] = useState("");

        const [seller, setSeller] = useState("");
        const [name, setName] = useState("");
        const [detail, setDetail] = useState("");
        const [price, setPrice] = useState("");

        const [callApi] = useMutation(CREATE_PRODUCT);

        const callGraphqlAPI = async () => {
            try {
                const result = await callApi({
                    variables: { seller, createProductInput:{ name, detail, price }}
            }) //try는여기서 실패하면 catch로 점프한다.
            console.log(result);
            setData(result.data.createProduct.message);
            alert("상품 등록 완료 :D");
            alert("상세페이지로 이동할까요?");

            router.push(`/day5-quiz02/${result.data.createProduct._id}`);

            } catch (error) {
                alert(error.message);
            }
    };

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
        <div>
            판매자 : <input type="text" onChange={onChangeSeller} /><br />
            상품명 : <input type="text" onChange={onChangeName} /> <br />
            상품내용 : <input type="text" onChange={onChangeDetail} /> <br />
            상품가격 : <input type="number" onChange={onChangePrice} /> <br />
            <button onClick={callGraphqlAPI}>상품 등록하기</button>
        </div>
    );
    }
