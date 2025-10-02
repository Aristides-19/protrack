import { cn, type Size, type Variant } from "@lib";
import type React from "react";

/**
 * @props { variant: btn-{variant}, size: btn-{size} }
 * @link https://daisyui.com/components/button/
 */
const Button = ({ variant = "base", size = "md", ...props }: Props) => {
  return (
    <button
      type="button"
      {...props}
      className={cn(`btn btn-${variant} btn-${size} btn-block px-8 shadow-none`, props.className)}
    >
      {props.children}
    </button>
  );
};

type Props = React.ComponentPropsWithoutRef<"button"> & {
  variant?: Variant | "ghost" | "link" | "base";
  size?: Size;
};

export default Button;
