"use client";

import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname } from "@/i18n";
import { LocaleSwitcher } from "@/05.features";
import { classes } from "@/07.shared/lib";

const NAV_ITEMS = [
  { href: "/design", key: "design" },
  { href: "/swap", key: "swap" },
] as const;

export const Header = () => {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const replay = () => window.dispatchEvent(new CustomEvent("phase:replay"));

  if (collapsed) {
    return (
      <button
        type="button"
        onClick={() => setCollapsed(false)}
        aria-label="Show menu"
        className="fixed left-3 top-1/2 z-50 -translate-y-1/2 rounded-full border border-white/10 bg-slate-900/85 p-2 text-white/70 shadow-lg backdrop-blur transition-colors hover:text-white"
      >
        <ChevronRight className="size-4" />
      </button>
    );
  }

  return (
    <div className="fixed left-3 top-1/2 z-50 flex -translate-y-1/2 flex-col items-stretch gap-1 rounded-2xl border border-white/10 bg-slate-900/85 p-1.5 shadow-lg backdrop-blur">
      {NAV_ITEMS.map(({ href, key }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={classes(
              "rounded-lg px-3 py-1.5 text-center text-sm font-medium transition-colors",
              active
                ? "bg-[#16C784] text-black"
                : "text-white/70 hover:bg-white/10 hover:text-white",
            )}
          >
            {t(key)}
          </Link>
        );
      })}

      <div className="my-0.5 h-px bg-white/10" />

      <button
        type="button"
        onClick={replay}
        title={t("replay")}
        className="flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        <RefreshCw className="size-3.5" />
        {t("replay")}
      </button>

      <div className="my-0.5 h-px bg-white/10" />

      <LocaleSwitcher />

      <div className="my-0.5 h-px bg-white/10" />

      <button
        type="button"
        onClick={() => setCollapsed(true)}
        aria-label="Hide menu"
        className="flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        <ChevronLeft className="size-3.5" />
        {t("hide")}
      </button>
    </div>
  );
};
