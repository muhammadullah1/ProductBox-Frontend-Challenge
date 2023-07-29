import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slicers/cartSlice"

const store = configureStore({
    reducer:{
        cart:cartReducer,
    }
})

export default store