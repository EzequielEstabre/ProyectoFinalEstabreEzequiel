import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        value: {
            user: "Hardcoder user",
            updatedAt: "",
            total: null,
            items: []
        }
    },
    reducers: {
        addCartItem: (state, action) => {

            const productExists = state.value.items.some(item => item.id === action.payload.id)

            if (productExists) {
                state.value.items = state.value.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
            } else state.value.items.push(action.payload)

            state.value.total = state.value.items.reduce(
                (acc, currentItem) => acc += currentItem.price * currentItem.quantity,
                0
            )

            state.value.updatedAt = new Date().toLocaleString()
        },
        removeCartItem: (state,action) => {
        }
    }
})

export const {addCartItem, removeCartItem} = cartSlice.actions

export default cartSlice.reducer