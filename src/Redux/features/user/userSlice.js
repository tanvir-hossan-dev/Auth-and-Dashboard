import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  token: undefined,
};

export const userSlice = createSlice({
  name: "User Slice",
  initialState,

  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    userLogedOut: (state) => {
      state.user = undefined;
      state.token = undefined;
    },
  },
});

export const { userLoggedIn, userLogedOut } = userSlice.actions;
