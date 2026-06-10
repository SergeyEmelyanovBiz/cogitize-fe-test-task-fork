import { useEffect, useRef, useState } from "react";

export function useThrottledValue<T>(value: T, delay: number): T {
  const [throttled, setThrottled] = useState<T>(value);
  const lastRunRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const now = Date.now();
    const elapsed = now - lastRunRef.current;

    const run = () => {
      lastRunRef.current = Date.now();
      setThrottled(value);
    };

    if (elapsed >= delay) {
      run();
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(run, delay - elapsed);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return throttled;
}
