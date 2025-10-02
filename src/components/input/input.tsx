import { cn, type Size, type Variant } from "@lib";
import type React from "react";

/**
 * @props { variant: input-{variant}, isize: input-{isize} }
 * @link https://daisyui.com/components/input/
 */
const Input = ({ variant, isize = "md", ...props }: Props) => {
  return (
    <input
      type="text"
      placeholder="Escribe..."
      {...props}
      className={cn(`input input-${isize} w-full`, variant && `input-${variant}`, props.className)}
    />
  );
};

type Props = React.ComponentPropsWithoutRef<"input"> & {
  variant?: Variant | "ghost";
  isize?: Size;
};

export default Input;
