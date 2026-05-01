import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem("cafe_moon_cart") || "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existing = state.items.find(
        (i) => i.idMeal === action.payload.idMeal,
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cafe_moon_cart", JSON.stringify(state.items));
    },
    removeItem: (
      state,
      action: PayloadAction<{ id: string; delta: number }>,
    ) => {
      const item = state.items.find((i) => i.idMeal === action.payload.id);
      if (item) {
        item.quantity += action.payload.delta;
        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (i) => i.idMeal !== action.payload.id,
          );
        }
      }
      localStorage.setItem("cafe_moon_cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cafe_moon_cart");
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
