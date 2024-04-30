import React, { useEffect, useState } from 'react';
import { publicRequest } from '../axios';

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
        {products.map((product) => <div key={product._id}>{product.name}</div>)}
      </section>
    )
}

export default Products;