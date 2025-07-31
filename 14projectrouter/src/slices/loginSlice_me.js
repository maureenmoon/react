import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { setCookie } from "../utils/cookieUtil";

//useSelector()사용하여 데이터 가져옴
const initState = {
  // email: "susiemoon@naver.com", //email있으면 로그인 되어서 logout버튼 보임
  email: "",
  nickname: "mau",
  userid: 10,
  currentWeight: 57, //다른 페이지에서 사용하는 정보들을 가져와야 함
};
//로그인방법#2 axios
export const loginPostAsync = createAsyncThunk(
  "loginPost",
  // ()=>{}
  (param) => {
    console.log("loginAsync : ", param);
    return loginPost(param);
  }
);

// const initState = ""; //email없으면 login버튼 보임

//reducer definition
const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initState,
  reducers: {
    //dispatch할때 적용
    //로그인방법#1
    // login: (state, action) => {
    //   console.log("login....");
    //   console.log(action.payload.email);
    //   state.email = action.payload.email;
    // },

    logout: (state, action) => {
      console.log("logOut....");
      state.email = ""; //reset login state
    },
  },
  extraReducers: (builder) => {
    //return값만 활용
    // builder.addCase(loginPostAsync.fulfilled, ()=>{}).addCase().addCase()
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled.....");
        const payload = action.payload;
        console.log(payload);
        setCookie("member", payload, 1);
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending.....");
      });
    // .addCase(loginPostAsync.rejected, (state, action) => {
    //   console.log("rejected.....");
    // });
  },
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
