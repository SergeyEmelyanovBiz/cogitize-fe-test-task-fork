import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { assetsApi } from "@/06.entities";
import { swapApi } from "../../api";
import { useSwapForm } from "./useSwapForm";

const makeWrapper = () => {
  const store = configureStore({
    reducer: {
      [assetsApi.reducerPath]: assetsApi.reducer,
      [swapApi.reducerPath]: swapApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        assetsApi.middleware,
        swapApi.middleware,
      ),
  });

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  Wrapper.displayName = "TestStoreWrapper";
  return Wrapper;
};

const render = () => renderHook(() => useSwapForm(), { wrapper: makeWrapper() });

describe("useSwapForm", () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it("defaults to USDT → BTC and cannot confirm yet", () => {
    const { result } = render();
    expect(result.current.fromAsset.symbol).toBe("USDT");
    expect(result.current.toAsset.symbol).toBe("BTC");
    expect(result.current.canConfirm).toBe(false);
  });

  it("sanitizes the amount: comma → dot, strips letters, single decimal", () => {
    const { result } = render();
    act(() => result.current.handleFromChange("1,5a.2"));
    expect(result.current.fromValue).toBe("1.52");
  });

  it("swaps token positions on swapTokens", () => {
    const { result } = render();
    act(() => result.current.swapTokens());
    expect(result.current.fromAsset.symbol).toBe("BTC");
    expect(result.current.toAsset.symbol).toBe("USDT");
  });

  it("prevents the same token on both sides", () => {
    const { result } = render();
    act(() => result.current.selectFromAsset(result.current.toAsset));
    expect(result.current.fromAsset.symbol).toBe("BTC");
    expect(result.current.toAsset.symbol).toBe("USDT");
  });

  it("clears the entered amount when a token changes", () => {
    const { result } = render();
    act(() => result.current.handleFromChange("100"));
    expect(result.current.fromValue).toBe("100");
    act(() => result.current.selectToAsset(result.current.fromAsset));
    expect(result.current.fromValue).toBe("");
  });
});
