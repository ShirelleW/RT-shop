import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../lib/features/Cart/cartSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer
    }
  })
}
