import { createApi } from "@reduxjs/toolkit/query/react";
import { SWAP_API_BASE } from "@/07.shared/const";
import { createHostQuery } from "@/07.shared/lib";
import type { PreviewPayload, PreviewResponse } from "../model";

export const swapApi = createApi({
  reducerPath: "swapApi",
  baseQuery: createHostQuery(SWAP_API_BASE),
  endpoints: (build) => ({
    preview: build.query<PreviewResponse, PreviewPayload>({
      query: (body) => ({
        url: "/preview",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { usePreviewQuery } = swapApi;
