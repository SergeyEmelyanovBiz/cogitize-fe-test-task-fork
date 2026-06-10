import { fireEvent, render, screen } from "@testing-library/react";
import { AssetRow } from ".";
import type { Asset } from "../model";

const asset: Asset = {
  id: 1,
  symbol: "BTC",
  name: "Bitcoin",
  assetImage: "https://example.com/btc.png",
};

describe("AssetRow", () => {
  it("renders the symbol and name", () => {
    render(<AssetRow asset={asset} />);
    expect(screen.getByText("BTC")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
  });

  it("calls onSelect with the asset when clicked", () => {
    const onSelect = jest.fn();
    render(<AssetRow asset={asset} onSelect={onSelect} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onSelect).toHaveBeenCalledWith(asset);
  });
});
