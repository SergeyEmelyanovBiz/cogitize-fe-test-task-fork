import { createApi } from "@reduxjs/toolkit/query/react";
import { ASSETS_API_BASE } from "@/07.shared/const";
import { createHostQuery } from "@/07.shared/lib";
import type { AssetsPage, AssetsQueryArg } from "../model";

export const assetsApi = createApi({
  reducerPath: "assetsApi",
  baseQuery: createHostQuery(ASSETS_API_BASE),
  endpoints: (build) => ({
    getAssets: build.infiniteQuery<AssetsPage, AssetsQueryArg, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage, _allPages, lastPageParam) =>
          lastPage.hasNextPage ? lastPageParam + 1 : undefined,
      },
      query: ({ queryArg, pageParam }) => ({
        url: "/assets",
        params: { search: queryArg.search, page: pageParam },
      }),
    }),
  }),
});

export const { useGetAssetsInfiniteQuery } = assetsApi;
