"use client"; // Required for Next.js

import { ReactNode, useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";

export default function MiniKitProvider({ children }: { children: ReactNode }) {
  const [isMiniKitInstalled, setIsMiniKitInstalled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      MiniKit.install();
      setIsMiniKitInstalled(MiniKit.isInstalled());
    }
  }, []);

  return (
    <>
      {isMiniKitInstalled ? "MiniKit is installed!" : "MiniKit is not installed."}
      {children}
    </>
  );
}
