import clsx from "clsx";
import { InputNumberSize } from "./input-number.type";

export const useInputNumberClasses = (
  isFocused: boolean,
  size?: keyof typeof InputNumberSize,
  error?: string,
  fullWidth?: boolean,
  hideErrorMassage?: boolean
) => {
  const inputClasses = clsx(
    " border shadow-sm bg-white  rounded-md  text-sm placeholder-gray-400  outline-none transition-all",
    {
      "border-gray-300": !error,
      "border-red-300 focus:border-red-500 text-red-900": error,
      "w-full": fullWidth,
      "py-2 px-15 ": size === InputNumberSize.base,
      "pr-20": InputNumberSize.base && !hideErrorMassage,
      "py-0.5 px-9 ": size === InputNumberSize.sm,
      "pr-14": InputNumberSize.sm && !hideErrorMassage,
    }
  );
  const inputWrapperClasses = clsx("relative inline-block", {
    "w-full": fullWidth,
  });

  const commonButtonClasses = {
    "absolute top-px transition-all": true,
    "border-gray-300": !error,
    "border-red-300": error && !isFocused,
    "border-red-500": error && isFocused,
    "h-9 w-9": size === InputNumberSize.base,
    "h-6 w-6": size === InputNumberSize.sm,
  };

  const buttonsPlusClasses = clsx("border-l right-0", commonButtonClasses);
  const buttonsMinusClasses = clsx("border-r left-0 ", commonButtonClasses);

  const buttonIconsClasses = clsx(" mx-auto  stroke-2 transition-all", {
    "stroke-gray-400": !error,
    "stroke-red-300": error && !isFocused,
    "stroke-red-500": error && isFocused,
    "w-4 h-4": size === InputNumberSize.sm,
    "w-5 h-5": size === InputNumberSize.base,
  });

  const errorMarkClasses = clsx("h-4 w-4 absolute fill-red-500", {
    "top-2.75 right-12 ": size === InputNumberSize.base,
    "top-1.25 right-8": size === InputNumberSize.sm,
  });

  return {
    inputClasses,
    inputWrapperClasses,
    buttonsMinusClasses,
    buttonsPlusClasses,
    buttonIconsClasses,
    errorMarkClasses,
  };
};
