"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { AssetRow, type Asset } from "@/06.entities";
import { Spinner } from "@/07.shared/components";
import { classes } from "@/07.shared/lib";
import { useTokenSelect } from "../../model/hooks";

type TokenSelectProps = {
  selected: Asset;
  onSelect: (asset: Asset) => void;
};

export const TokenSelect = ({ selected, onSelect }: TokenSelectProps) => {
  const t = useTranslations("swap");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const {
    search,
    setSearch,
    assets,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isLoading,
  } = useTokenSelect();

  useEffect(() => {
    if (!open) return;
    const onClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { root: scrollRef.current, rootMargin: "80px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [open, hasNextPage, isFetchingNextPage, fetchNextPage, assets.length]);

  const handleSelect = (asset: Asset) => {
    onSelect(asset);
    setOpen(false);
    setSearch("");
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 transition-opacity hover:opacity-80 active:opacity-60"
      >
        <img
          src={selected.assetImage}
          alt={selected.symbol}
          width={28}
          height={28}
          className="size-7 rounded-full object-cover"
        />
        <span className="flex flex-col items-start leading-tight">
          <span className="flex items-center gap-1 text-lg font-bold text-white">
            {selected.symbol}
            <ChevronDown
              className={classes(
                "size-4 transition-transform",
                open && "rotate-180",
              )}
            />
          </span>
          <span className="text-xs text-gray-400">{selected.name}</span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-0 top-full z-30 mt-2 w-64 rounded-2xl bg-white p-2 shadow-2xl"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.16 }}
          >
            <div className="mb-2 flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2">
              <Search className="size-4 text-gray-400" />
              <input
                autoFocus
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={t("searchCoins")}
                className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />
            </div>

            <div
              ref={scrollRef}
              className="scroll-bar max-h-64 overflow-y-auto"
            >
              {isLoading ? (
                <div className="flex justify-center py-6">
                  <Spinner />
                </div>
              ) : assets.length === 0 ? (
                <p className="py-6 text-center text-sm text-gray-400">
                  {t("noResults")}
                </p>
              ) : (
                <>
                  <div className="divide-y divide-gray-100">
                    {assets.map((asset) => (
                      <AssetRow
                        key={asset.id}
                        asset={asset}
                        active={asset.id === selected.id}
                        onSelect={handleSelect}
                      />
                    ))}
                  </div>
                  <div ref={sentinelRef} className="h-px" />
                  {isFetching && hasNextPage && (
                    <div className="flex justify-center py-3">
                      <Spinner className="size-4" />
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

