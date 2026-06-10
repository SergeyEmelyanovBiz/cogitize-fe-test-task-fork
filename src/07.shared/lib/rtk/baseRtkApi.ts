import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createHostQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    headers: { "Content-Type": "application/json" },
  });

export { createHostQuery, fetchBaseQuery };
