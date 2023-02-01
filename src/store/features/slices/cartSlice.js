import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          title: newItem.title,
          description: newItem.description,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearSingleCartItems(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.items = state.items.filter((item) => item.id !== id);
      state.changed = true;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCartItems(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.changed = false;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItemToCart, removeItemFromCart, replaceCart, clearCartItems, clearSingleCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;
