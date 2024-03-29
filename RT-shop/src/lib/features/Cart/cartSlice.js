const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cartItems: [],
    count: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state, action) => {
            state.count -= 1;
        },
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
        },
    }
});

export const { increment, decrement, addToCart } = cartSlice.actions;
export default cartSlice.reducer;