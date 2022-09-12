import { createSlice } from "@reduxjs/toolkit";
import { DialogType } from "../type/type";

const tellDialogSlice = createSlice({
  name: "tellDialog",
  initialState: {
    isOpen: false,
  },
  reducers: {
    tellDialogOpen: (state) => {
      state.isOpen = true;
    },
    tellDialogClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { tellDialogOpen, tellDialogClose } = tellDialogSlice.actions;
export default tellDialogSlice.reducer;
