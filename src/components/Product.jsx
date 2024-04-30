import React from 'react';

import { Link } from 'react-router-dom';

const Product = ({product}) => {
  return (
    <Link to={`/products/${product._id}`} className='product-link cursor-pointer absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center'>
      {product.name}
    </Link>
  );
}

export default Product;