import { classes } from "@/07.shared/lib";
import type { Asset } from "../model";

type AssetRowProps = {
  asset: Asset;
  onSelect?: (asset: Asset) => void;
  active?: boolean;
};

export const AssetRow = ({ asset, onSelect, active }: AssetRowProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(asset)}
      className={classes(
        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors",
        "hover:bg-black/5",
        active && "bg-black/5",
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset.assetImage}
        alt={asset.symbol}
        width={28}
        height={28}
        className="size-7 rounded-full object-cover"
      />
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold text-gray-900">
          {asset.symbol}
        </span>
        <span className="text-xs text-gray-500">{asset.name}</span>
      </span>
    </button>
  );
};

