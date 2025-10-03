import { cn } from "@lib";
import type React from "react";
import { useController, type FieldValues, type UseControllerProps } from "react-hook-form";

/**
 * Use inputProps.className for input variants and sizes from daisyUI.
 * @link https://daisyui.com/components/input/
 */
const Text = <TFieldValues extends FieldValues>({
  left,
  right,
  containerProps,
  inputProps,
  ...props
}: Props<TFieldValues>) => {
  const { field, fieldState } = useController(props);

  return (
    <div className="flex flex-col gap-1">
      <label
        {...containerProps}
        className={cn(
          "input input-md gap-2.5 w-full flex items-center",
          fieldState.isTouched && fieldState.invalid && "input-error",
          fieldState.isTouched && !fieldState.invalid && "input-success",
          containerProps?.className
        )}
      >
        {left && <span className="shrink-0">{left}</span>}
        <input
          {...field}
          type="text"
          placeholder={props.name}
          {...inputProps}
          className={cn("w-full grow placeholder:opacity-50", inputProps?.className)}
        />
        {right && <span className="shrink-0">{right}</span>}
      </label>
      <span className="text-base-content/60 flex items-center gap-2 px-1 text-[0.6875rem]">
        {fieldState.error && <span className="status status-error shadow-none"></span>}
        {fieldState.error && fieldState.error.message}
      </span>
    </div>
  );
};

type Props<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> & {
  inputProps?: Omit<
    React.ComponentPropsWithoutRef<"input">,
    "name" | "onChange" | "value" | "onBlur" | "disabled"
  >;
  containerProps?: React.ComponentPropsWithoutRef<"label">;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export default Text;
