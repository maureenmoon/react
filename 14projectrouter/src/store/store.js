import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slices/loginSlice";

const store = configureStore({
  reducer: {
    //reducer 저장소. {{}}: 여러개의 reducer가능
    // loginSlice: loginSlice.reducer,
    loginSlice: loginSlice,
  },
});

export default store;
