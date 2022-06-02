import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },

    deleteItems: (state, action) => {
      state.items = state.items.filter(
        (item, index) => item.id !== action.payload
      );
    },
  },
});

console.log('------', todoSlice);

export const { addItems, deleteItems } = todoSlice.actions;

export default todoSlice.reducer;
