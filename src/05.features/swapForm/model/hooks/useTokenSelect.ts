"use client";

import { useMemo, useState } from "react";
import { useGetAssetsInfiniteQuery } from "@/06.entities";
import { useThrottledValue } from "@/07.shared/hooks";

const SEARCH_THROTTLE_MS = 400;

export function useTokenSelect() {
  const [search, setSearch] = useState("");
  const throttledSearch = useThrottledValue(search, SEARCH_THROTTLE_MS);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  } = useGetAssetsInfiniteQuery({ search: throttledSearch });

  const assets = useMemo(
    () => data?.pages.flatMap((page) => page.data) ?? [],
    [data],
  );

  return {
    search,
    setSearch,
    assets,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  };
}
