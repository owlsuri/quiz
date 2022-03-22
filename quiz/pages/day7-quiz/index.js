import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import styled from '@emotion/styled'

const FETCH_PRODUCTS = gql`
  query fetchProducts{
    fetchProducts{
      _id
      seller
      name
      detail
      price
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      message
    }
  }
`;

const Row = styled.div`
    display: flex;
    border-bottom: 1px dashed lightgray;
`
const ColumnCB = styled.div`
    width: 50px;
`
const Column = styled.div`
  width: 20%;
`;
export default function productReceive() {

  const { data } = useQuery(FETCH_PRODUCTS)
  const [ deleteProduct ] = useMutation(DELETE_PRODUCT)

  console.log(data);

   const onClickDelete = (event) => {
     deleteProduct({
       variables: { productId: event.target.id },
       refetchQueries: [{ query: FETCH_PRODUCTS }],
     });
   };

    return (
        <div>
          { data?.fetchProducts.map((el) => (
            <Row key={el._id}>
                <ColumnCB><input type="checkbox" /></ColumnCB>
                <Column>{el.seller}</Column>
                <Column>{el.name}</Column>
                <Column>{el.detail}</Column>
                <Column>{el.price}</Column>

                <button onClick={onClickDelete} id={el._id}>삭제</button>
            </Row>
            ))}       
        </div>
    );
}
