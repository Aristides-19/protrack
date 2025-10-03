import { cn } from "@lib";
import type React from "react";

/**
 * Use className for button variants and sizes from daisyUI.
 * @link https://daisyui.com/components/button/
 */
const Button = (props: Props) => {
  return (
    <button
      type="button"
      {...props}
      className={cn(`btn btn-base btn-md btn-block px-8 shadow-none`, props.className)}
    >
      {props.children}
    </button>
  );
};

type Props = React.ComponentPropsWithoutRef<"button">;

export default Button;
