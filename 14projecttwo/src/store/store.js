import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slices/loginSlice";

const store = configureStore({
  reducer: {
    // loginSlice: loginSlice.reducer,
    loginSlice,
  },
});

export default store;
