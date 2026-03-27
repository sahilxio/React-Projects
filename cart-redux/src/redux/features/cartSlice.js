import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {

        addToCart: (state, action) => {
            const currentItem = state.cart.find((item) => (
                item.id === action.payload.id
            ))

            if(currentItem){
                currentItem.quantity += 1
            }else{
                state.cart.push({...action.payload, quantity: 1})
            }
        },


        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => (
                item.id !== action.payload.id
            ))
        },

        quantityUp: (state, action) => {
            const currentItem = state.cart.find((item) => (
                item.id === action.payload.id
            ))

            if(currentItem){
                currentItem.quantity += 1
            }
        },


        quantityDown: (state, action) => {
            const currentItem = state.cart.find((item) => (
                item.id === action.payload.id
            ))

            if(currentItem && currentItem.quantity > 1 ){
                currentItem.quantity -= 1

            }
        },


        clearCart: (state) => {
            state.cart = [];
        }
      


    }
})

export const {addToCart, removeFromCart, quantityDown, quantityUp, clearCart} = cartSlice.actions
export default cartSlice.reducer

