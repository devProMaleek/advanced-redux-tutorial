import { configureStore } from '@reduxjs/toolkit';

import uiSliceReducer from './features/slices/UISlice';
import cartSliceReducer from './features/slices/cartSlice';

const store = configureStore({
  reducer: { ui: uiSliceReducer, cart: cartSliceReducer },
});

export default store;
