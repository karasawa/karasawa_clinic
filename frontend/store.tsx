import { configureStore } from "@reduxjs/toolkit";
import burgerMenuSlice from "./features/burgerMenuSlice";
import tellDialogSlice from "./features/tellDialogSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    burgerMenu: burgerMenuSlice,
    tellDialog: tellDialogSlice,
  },
});
