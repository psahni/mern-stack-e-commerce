import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalQantity: 0,
    totalPrice: 0
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action) {
            console.log(action)
            const product = action.payload.product;
            const newProduct = {
                _id: product._id,
                name: product.name,
                decription: product.description,
                quantity: 1,
                price: product.price
            }

            const index = state.products.findIndex(product => product._id == newProduct._id)
            if (index == -1) {
              state.products.push(product);
            } else {
              const oldProduct = state.products[index];
              oldProduct.quantity +=1;
              state.products[index] = oldProduct;
            }
            console.log("before", state.totalPrice)
            state.totalQantity += newProduct.quantity;
            state.totalPrice += newProduct.price * newProduct.quantity;
            console.log("after", state.totalPrice)

            return state;
        }
    }
})

export const { addProduct } = cartSlice.actions;
export default cartSlice;
