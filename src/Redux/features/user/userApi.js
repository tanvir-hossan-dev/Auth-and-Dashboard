import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: { email: data.email, password: data.password },
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
        try {
          localStorage.setItem("Auth-Dashboard", JSON.stringify({ user: arg, token: result.data.token }));
          dispatch(userLoggedIn({ user: arg, token: result.data.token }));
        } catch (err) {}
      },
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: { email: data.email, password: data.password },
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
        try {
          localStorage.setItem("Auth-Dashboard", JSON.stringify({ user: arg, token: result.data.token }));
          dispatch(userLoggedIn({ user: arg, token: result.data.token }));
        } catch (err) {}
      },
    }),
  }),
});

export const { useUserRegisterMutation, useUserLoginMutation } = userApi;
