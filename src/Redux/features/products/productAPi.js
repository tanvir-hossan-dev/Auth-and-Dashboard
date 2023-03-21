import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (pageNumber) => ({
        url: `users?page=${pageNumber}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
