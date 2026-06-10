import type { SwapDirection } from "@/07.shared/const";

export interface PreviewPayload {
  fromAssetId: number;
  toAssetId: number;
  direction: SwapDirection;
  amount: string;
  balanceType: ["main", "trade"];
}

export interface PreviewResponse {
  estimatedGive: string;
  estimatedReceive: string;
  estimatedRate: string;
  estimatedUsdtEquivalent: string;
}
