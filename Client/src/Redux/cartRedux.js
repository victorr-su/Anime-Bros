import { createSlice } from '@reduxjs/toolkit';
import Cart from '../Components/Pages/Cart/Cart';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[],
        quantity: 0,
        total: 0,

    },
    reducers:{
        addProduct: (state,action) =>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        deleteProduct: (state,action) =>{
            state.quantity-=1;
            state.products.splice(
                state.products.findIndex((product)=> product._id === action.payload._id),1
            )
            state.total -= action.payload.price * action.payload.quantity
        }
    }
})

export const {addProduct, deleteProduct} = cartSlice.actions
export default cartSlice.reducer;