import { classes } from "@/07.shared/lib";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, disabled, ...rest }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={classes(
        "w-full rounded-xl bg-[#16C784] py-3.5 text-center text-sm font-semibold text-black",
        "transition-colors duration-200 hover:bg-[#13b276]",
        "disabled:cursor-not-allowed disabled:bg-[#16C784]/30 disabled:text-black/40",
        className,
      )}
      {...rest}
    />
  );
};

