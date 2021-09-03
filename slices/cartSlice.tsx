import { createSlice } from '@reduxjs/toolkit'

interface CoolState {
    items: object[]
}

const initialState: CoolState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, actions) => {
            state.items = [...state.items, actions.payload]
            localStorage.setItem('cart', JSON.stringify(state.items))
        },
        initialCart: (state, actions) => {
            state.items = [...actions.payload]
        },
    },
})

export const { addToCart, initialCart } = cartSlice.actions

export const showCartItem = (state) => state.cart.items.length

export default cartSlice.reducer
