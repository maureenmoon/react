import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../services/api";

const initState = {
  email: "",
  nickname: "",
  isAuthenticated: false,
  isLoading: false,
  error: null,
  token: localStorage.getItem("authToken") || null,
  //로그인시 닉네임 요구하는 경우, 닉네임 값 있는 경우에만 로그인상태임을 알 수 있다
  //다른 컴포넌트에서 자료 가져오게 하려면 useSelector( )사용
  //변경하는 것은 dispatch()
};

// Async thunks
export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authAPI.login(credentials);
      localStorage.setItem("authToken", response.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const registerUser = createAsyncThunk(
  "login/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authAPI.register(userData);
      localStorage.setItem("authToken", response.token);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  "login/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await authAPI.logout();
      localStorage.removeItem("authToken");
      return null;
    } catch (error) {
      localStorage.removeItem("authToken");
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  }
);

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    checkAuthStatus: (state) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        state.token = token;
        state.isAuthenticated = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.email = action.payload.user.email;
        state.nickname = action.payload.user.nickname;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.email = action.payload.user.email;
        state.nickname = action.payload.user.nickname;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.email = "";
        state.nickname = "";
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = null;
        state.token = null;
      });
  },
});

// export default loginSlice;
export default loginSlice.reducer;
export const { clearError, checkAuthStatus } = loginSlice.actions;
