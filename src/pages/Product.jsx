import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { publicRequest } from "axios_request";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
   const getProduct = async () => {
      try {
        const url = `/products/${id}`;
        const response = await publicRequest.get(url);
        const { product } = response.data;
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
   }

   useEffect(() => {
    getProduct()
   }, [])

   return (
    <>
      <div>
       { product.name }
      </div>
    </>
   )
}

export default SingleProduct;