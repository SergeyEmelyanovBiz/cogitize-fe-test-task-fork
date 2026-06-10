"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { locales, usePathname, useRouter } from "@/i18n";
import { classes } from "@/07.shared/lib";

export const LocaleSwitcher = () => {
  const activeLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (locale: string) => {
    if (locale === activeLocale) return;
    startTransition(() => router.replace(pathname, { locale }));
  };

  return (
    <div className="flex items-center gap-1 rounded-full bg-black/30 p-1">
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchTo(locale)}
          disabled={isPending}
          aria-pressed={locale === activeLocale}
          className={classes(
            "rounded-full px-3 py-1 text-xs font-semibold uppercase transition-colors",
            locale === activeLocale
              ? "bg-[#16C784] text-black"
              : "text-white/70 hover:text-white",
          )}
        >
          {locale}
        </button>
      ))}
    </div>
  );
};

