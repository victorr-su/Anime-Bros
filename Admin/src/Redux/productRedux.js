import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products:[],
        isfetching: false,
        error: false
    },
    reducers:{
        // GET
        getProductStart:(state)=>{
            state.isfetching = true;
            state.error = false;
        },
        getProductSuccess: (state, action)=>{
            state.isfetching = false;
            state.error = false;
            state.products = action.payload;
        },
        getProductFail: (state)=>{
            state.isfetching = false;
            state.error = true;
        },

        //DElete

        deleteProductStart:(state)=>{
            state.isfetching = true;
            state.error = false;
        },
        deleteProductSuccess: (state, action)=>{
            state.isfetching = false;
            state.products.splice(
                state.products.findIndex(item=>item._id === action.payload), 1
            )
        },
        deleteProductFail: (state)=>{
            state.isfetching = false;
            state.error = true;
        },
    }
});

export const {getProductStart, getProductSuccess,getProductFail, deleteProductFail, deleteProductStart, deleteProductSuccess} = productSlice.actions;
export default productSlice.reducer