import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/cartSlice'
import filtersReducer from '../slices/filtersSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filtersReducer
  }
})
