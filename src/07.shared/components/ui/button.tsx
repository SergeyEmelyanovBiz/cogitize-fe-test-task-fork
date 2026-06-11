import { classes } from "@/07.shared/lib";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, disabled, ...rest }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={classes(
        "w-full rounded-xl bg-[#16C784] py-3.5 text-center text-sm font-semibold text-black",
        "transition-all duration-200 hover:bg-[#13b276] active:scale-[0.98]",
        "disabled:cursor-not-allowed disabled:bg-[#16C784]/30 disabled:text-black/40 disabled:active:scale-100",
        className,
      )}
      {...rest}
    />
  );
};

