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

        //Delete
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

        // UPDATE
        updateProductStart:(state)=>{
            state.isfetching = true;
            state.error = false;
        },
        updateProductSuccess: (state, action)=>{
            state.isfetching = false;
            state.products[state.products.findIndex((item) => item._id === action.payload.id)] = action.payload.product;
        },
        updateProductFail: (state)=>{
            state.isfetching = false;
            state.error = true;
        },

         // ADD
         addProductStart:(state)=>{
            state.isfetching = true;
            state.error = false;
        },
        addProductSuccess: (state, action)=>{
            state.isfetching = false;
            state.products.push(action.payload)
        },
        addProductFail: (state)=>{
            state.isfetching = false;
            state.error = true;
        },
    }
});

export const {
getProductStart, 
getProductSuccess,
getProductFail, 
deleteProductFail, 
deleteProductStart, 
deleteProductSuccess,
updateProductStart, 
updateProductSuccess,
updateProductFail,
addProductStart,
addProductSuccess,
addProductFail} 
= productSlice.actions;
export default productSlice.reducer