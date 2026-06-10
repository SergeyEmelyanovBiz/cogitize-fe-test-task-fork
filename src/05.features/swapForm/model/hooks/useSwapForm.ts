"use client";

import { skipToken } from "@reduxjs/toolkit/query/react";
import { useMemo, useState } from "react";
import {
  DEFAULT_FROM_ASSET,
  DEFAULT_TO_ASSET,
  type Asset,
} from "@/06.entities";
import { PREVIEW_THROTTLE_MS, SwapDirection } from "@/07.shared/const";
import { useThrottledValue } from "@/07.shared/hooks";
import { usePreviewQuery } from "../../api";
import type { PreviewPayload } from "../types";

const sanitizeAmount = (raw: string): string => {
  const normalized = raw.replace(",", ".").replace(/[^\d.]/g, "");
  const [intPart, ...rest] = normalized.split(".");
  return rest.length ? `${intPart}.${rest.join("")}` : intPart;
};

const isPositive = (value: string) => value !== "" && Number(value) > 0;

export function useSwapForm() {
  const [fromAsset, setFromAsset] = useState<Asset>(DEFAULT_FROM_ASSET);
  const [toAsset, setToAsset] = useState<Asset>(DEFAULT_TO_ASSET);
  const [sourceAmount, setSourceAmount] = useState("");
  const [activeField, setActiveField] = useState<SwapDirection>(
    SwapDirection.From,
  );

  const sourceIsFrom = activeField === SwapDirection.From;
  const throttledAmount = useThrottledValue(sourceAmount, PREVIEW_THROTTLE_MS);

  const previewArg: PreviewPayload | typeof skipToken = useMemo(() => {
    if (!isPositive(throttledAmount) || fromAsset.id === toAsset.id) {
      return skipToken;
    }
    return {
      fromAssetId: fromAsset.id,
      toAssetId: toAsset.id,
      direction: activeField,
      amount: throttledAmount,
      balanceType: ["main", "trade"],
    };
  }, [throttledAmount, fromAsset.id, toAsset.id, activeField]);

  const { data: preview, isFetching, isError } = usePreviewQuery(previewArg);

  const fromValue = sourceIsFrom ? sourceAmount : preview?.estimatedGive ?? "";
  const toValue = sourceIsFrom ? preview?.estimatedReceive ?? "" : sourceAmount;

  const resetForm = () => {
    setSourceAmount("");
    setActiveField(SwapDirection.From);
  };

  const handleFromChange = (raw: string) => {
    setActiveField(SwapDirection.From);
    setSourceAmount(sanitizeAmount(raw));
  };

  const handleToChange = (raw: string) => {
    setActiveField(SwapDirection.To);
    setSourceAmount(sanitizeAmount(raw));
  };

  const selectFromAsset = (asset: Asset) => {
    if (asset.id === toAsset.id) setToAsset(fromAsset);
    setFromAsset(asset);
    resetForm();
  };

  const selectToAsset = (asset: Asset) => {
    if (asset.id === fromAsset.id) setFromAsset(toAsset);
    setToAsset(asset);
    resetForm();
  };

  const swapTokens = () => {
    setFromAsset(toAsset);
    setToAsset(fromAsset);
  };

  const canConfirm = Boolean(preview) && !isError && isPositive(sourceAmount);

  return {
    fromAsset,
    toAsset,
    fromValue,
    toValue,
    isFetching,
    isError,
    canConfirm,
    handleFromChange,
    handleToChange,
    selectFromAsset,
    selectToAsset,
    swapTokens,
    resetForm,
  };
}
