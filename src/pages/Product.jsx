import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { publicRequest } from "axios_request";
import { addProduct } from "store/cart"

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
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

   const addToCartHandler = () => {
      console.log("addToCartHandler()")
      dispatch(addProduct({ product }));
   }

   useEffect(() => {
    getProduct()
   }, [])

   return (
    <>
      <div>
       <div>
        { product.name } : Rs{product.price}
       </div>
       <button  onClick={addToCartHandler} className='cursor-pointer'>Add To Cart</button>
        <div>
          <Link to='/cart'> Go To Cart</Link>
        </div>
      </div>
    </>
   )
}

export default SingleProduct;