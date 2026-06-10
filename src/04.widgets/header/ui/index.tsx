"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n";
import { LocaleSwitcher } from "@/05.features";
import { classes } from "@/07.shared/lib";

const NAV_ITEMS = [
  { href: "/design", key: "design" },
  { href: "/swap", key: "swap" },
  { href: "/guide", key: "guide" },
] as const;

export const Header = () => {
  const t = useTranslations("nav");
  const pathname = usePathname();

  // The Design route renders the full PHASE landing (with its own header), so
  // here we collapse the app navigation into a small floating switcher to keep
  // that page pristine while still allowing task switching.
  const compact = pathname.startsWith("/design");

  const links = NAV_ITEMS.map(({ href, key }) => {
    const active = pathname === href;
    return (
      <Link
        key={href}
        href={href}
        aria-current={active ? "page" : undefined}
        className={classes(
          "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
          active
            ? "bg-[#16C784] text-black"
            : "text-white/70 hover:bg-white/10 hover:text-white",
        )}
      >
        {t(key)}
      </Link>
    );
  });

  if (compact) {
    return (
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1 rounded-full border border-white/10 bg-slate-900/85 p-1 shadow-lg backdrop-blur">
        {links}
        <LocaleSwitcher />
      </div>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <nav className="flex items-center gap-1">{links}</nav>
        <LocaleSwitcher />
      </div>
    </header>
  );
};
