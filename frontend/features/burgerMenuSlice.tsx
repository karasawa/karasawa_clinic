import { createSlice } from "@reduxjs/toolkit";
import { DialogType } from "../type/type";

const burgerMenuSlice = createSlice({
  name: "burgerMenu",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
