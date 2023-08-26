import { createSlice } from "@reduxjs/toolkit";
import { login, loginGoogle, logout, register } from "../apiCalls/auth";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    reset: (state, action) => {
      state.isLoggedIn = false;
      state.error = null;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // google login
    builder.addCase(loginGoogle.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      localStorage.setItem("isLoggedIn", true);
    });
    builder.addCase(loginGoogle.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.isLoggedIn = false;
      state.user = null;
    });
    // normal login
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
      //   Cookies.set("access_token", action.payload.token);
      localStorage.setItem("isLoggedIn", true);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.isLoggedIn = false;
      state.user = null;
      //   state.token = null;
    });
    // register
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    // logout
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.user = null;
      //   Cookies.remove("access_token");
      localStorage.setItem("isLoggedIn", false);
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.isLoggedIn = false;
      state.user = null;
      //   state.token = null;
    });
  },
});

export const { reset, resetError, setError } = authSlice.actions;
export default authSlice.reducer;
