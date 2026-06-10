import { classes } from "@/07.shared/lib";

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <span
      className={classes(
        "inline-block size-5 animate-spin rounded-full border-2 border-white/20 border-t-[#16C784]",
        className,
      )}
      role="status"
      aria-label="loading"
    />
  );
};

