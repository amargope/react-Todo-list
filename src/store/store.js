import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../slices/todoSlice'
import searchSlice from '../slices/searchSlice'

export const store = configureStore({
  reducer: {
   todoSlice: todoSlice,
   search: searchSlice
  },
})