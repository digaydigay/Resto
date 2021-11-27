import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  init: "none",
};

export const showAuthFormSlice = createSlice({
  name: "showAuthForm",
  initialState,
  reducers: {
    signin: (state) => {
      state.init = "signin";
    },
    createaccount: (state) => {
      state.init = "createaccount";
    },
    cancel: (state) => {
      state.init = "none";
      console.log(state.init);
    },
  },
});
export const { signin, createaccount, cancel } = showAuthFormSlice.actions;

export default showAuthFormSlice.reducer;
