const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    count: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += 1;
        }
    }
});

export default cartSlice.reducer;