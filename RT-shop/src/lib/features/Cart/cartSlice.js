const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    count: 0,
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += 1;
        },
        decrement: (state, action) => {
            state.count -= 1;
        },
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
        }
    }
});

export const { increment, decrement, addToCart } = cartSlice.actions;
export default cartSlice.reducer;