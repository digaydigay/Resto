import { configureStore } from "@reduxjs/toolkit";

// reducer
import showAuthFormSlice from "./reducer/showAuthForm";
export default configureStore({
  reducer: {
    showAuthForm: showAuthFormSlice,
  },
});
