import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { publicRequest } from '../axios_request';

const Products = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
      const url = "/products"
      const response = await publicRequest.get(url);

      setProducts(response.data);
    }

    // getProducts() on every component mount
    useEffect(() => {
      getProducts();
    }, []);

    return (
      <section>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
        <div>
          <Link to='/cart'> Go To Cart</Link>
        </div>
      </section>
    )
}

export default Products;