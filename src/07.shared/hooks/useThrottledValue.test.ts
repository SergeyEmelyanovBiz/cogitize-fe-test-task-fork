import { act, renderHook } from "@testing-library/react";
import { useThrottledValue } from "./useThrottledValue";

describe("useThrottledValue", () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it("applies the first value immediately (leading edge)", () => {
    const { result } = renderHook(({ value }) => useThrottledValue(value, 600), {
      initialProps: { value: "a" },
    });
    expect(result.current).toBe("a");
  });

  it("coalesces rapid changes and flushes the latest one (trailing edge)", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useThrottledValue(value, 600),
      { initialProps: { value: "1" } },
    );

    rerender({ value: "12" });
    rerender({ value: "123" });
    expect(result.current).toBe("1");

    act(() => {
      jest.advanceTimersByTime(600);
    });
    expect(result.current).toBe("123");
  });
});
