"use client";

import { Fragment, useEffect, useState } from "react";

const ReplayBoundary = ({ children }: { children: React.ReactNode }) => {
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const handler = () => setReplayKey((value) => value + 1);
    window.addEventListener("phase:replay", handler);
    return () => window.removeEventListener("phase:replay", handler);
  }, []);

  // Changing the key remounts the page content, so all entrance animations
  // (Framer Motion `initial` → `animate`) run again from the start.
  return <Fragment key={replayKey}>{children}</Fragment>;
};

export default ReplayBoundary;
