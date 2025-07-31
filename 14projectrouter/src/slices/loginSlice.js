import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, setCookie } from "../utils/cookieUtil";

const initState = {
  email: "",
  nickname: "hanyong5",
  userid: 10,
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  if (memberInfo && memberInfo.nickname) {
    memberInfo.nickname = decodeURIComponent(memberInfo.nickname);
  }
  return memberInfo;
};

export const loginPostAsync = createAsyncThunk("loginPost", (param) => {
  console.log("loginAsync : ", param);
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadMemberCookie() || initState,
  reducers: {
    // login: (state, action) => {
    //   console.log("login....");
    //   console.log(action.payload.email);
    //   state.email = action.payload.email;
    // },

    logout: (state, action) => {
      console.log("logOut....");
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(loginPostAsync.fulfilled,()=>{}).addCase().addCase()
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled.....");
        const payload = action.payload;
        console.log(payload);
        if (!payload.error) {
          setCookie("member", JSON.stringify(payload), 1);
        }
        return payload;
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending......");
      });
  },
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
