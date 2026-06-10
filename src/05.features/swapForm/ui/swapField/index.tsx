"use client";

import type { Asset } from "@/06.entities";
import { TokenSelect } from "../tokenSelect";

type SwapFieldProps = {
  label: string;
  asset: Asset;
  value: string;
  onAssetSelect: (asset: Asset) => void;
  onValueChange: (value: string) => void;
};

export const SwapField = ({
  label,
  asset,
  value,
  onAssetSelect,
  onValueChange,
}: SwapFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-400">{label}</span>
      <div className="flex items-center justify-between gap-3">
        <TokenSelect selected={asset} onSelect={onAssetSelect} />
        <input
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          inputMode="decimal"
          placeholder="0.0"
          className="w-28 bg-transparent text-right text-xl font-semibold text-white outline-none placeholder:text-gray-500"
        />
      </div>
    </div>
  );
};

