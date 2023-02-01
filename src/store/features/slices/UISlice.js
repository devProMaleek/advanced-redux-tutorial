import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCartVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      if (action.payload === null) {
        state.notification = null;
        return;
      } else {
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
      }
    },
  },
});

export const { toggleCartVisibility, showNotification } = uiSlice.actions;

export default uiSlice.reducer;
