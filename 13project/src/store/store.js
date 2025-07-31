import { createStore } from "@reduxjs/toolkit";
import loginReducer from "../reducer/loginReducer";

const store = createStore(loginReducer);

export default store;
