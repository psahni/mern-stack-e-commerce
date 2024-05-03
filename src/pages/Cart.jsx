import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <>
      <div className='flex'>
        <span className='capitalize'>estimated shipping</span>
        <span>Rs 00.00</span>
      </div>
      <div className='flex justify-between mb-8'>
        <span className='capitalize font-bold text-2xl'>Total</span>
        <span className='font-bold text-2xl'>Rs {cart.totalPrice}</span>
      </div>
      <div>
        Checkout
      </div>
    </>
  )
}

export default Cart;