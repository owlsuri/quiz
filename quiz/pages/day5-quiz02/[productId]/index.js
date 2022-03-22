import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";


const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function productReceive() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });

  console.log(data);

  return (
    <div>
      <div>{data ? data.fetchProduct._id : "loading..."}상품입니다.</div>
      <div>작성자 : {data ? data.fetchProduct.seller : "loading..."}</div>
      <div>제목 : {data ? data.fetchProduct.name : "loading..."}</div>
      <div>내용 : {data ? data.fetchProduct.detail : "loading..."}</div>
      <div>가격 : {data ? data.fetchProduct.price : "loading..."}</div>
    </div>
  );
}
