"use client";

import { NAV } from "../phaseHeader";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  return (
    <div
      aria-hidden={!open}
      className="fixed right-0 top-0 z-0 flex h-full w-[78%] flex-col bg-white px-6 py-6 md:hidden"
    >
      <span className="text-lg font-extrabold text-[#181818]">PHASE</span>

      <nav className="mt-10 flex flex-col gap-6">
        {NAV.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-baseline gap-2 text-3xl font-bold text-[#181818]"
          >
            {item.label}
            <span className="text-xs font-medium text-[#BF57F3]">
              0{index + 1}
            </span>
          </a>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-3">
        <button
          type="button"
          className="rounded-xl bg-[#FFD000] py-3 text-sm font-semibold text-[#181818]"
        >
          ↳ Create you Phase
        </button>
        <button
          type="button"
          className="rounded-xl border border-[#181818] py-3 text-sm font-semibold text-[#181818]"
        >
          Log in
        </button>
      </div>
    </div>
  );
};
