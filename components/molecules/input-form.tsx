import Loading from "@/assets/icons/loading";
import { ComponentProps, forwardRef } from "react";

interface InputForm extends ComponentProps<"input"> {
  label?: string;
  invalid?: boolean;
  errorMessage?: string;
  isLoading?: boolean;
}

export const InputForm = forwardRef<HTMLInputElement, InputForm>(
  ({ label, invalid, errorMessage, isLoading, ...props }, ref) => {
    return (
      <div className="">
        <label className="block font-light mb-3" htmlFor={label}>
          {label}
        </label>
        <div className="flex border-neutral-600 border items-center ">
          <input
            ref={ref}
            className="w-full py-2 pl-4 bg-transparent disabled:opacity-50"
            {...props}
            id={label}
            disabled={props.disabled || isLoading}
          />
          {isLoading && <Loading className="w-8 h-8 mr-4" />}
        </div>
        <p className={`mt-2 text-red-500 ${!invalid && "invisible"}`}>
          {errorMessage}
        </p>
      </div>
    );
  }
);

InputForm.displayName = "InputForm";
