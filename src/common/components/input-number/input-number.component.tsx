import {  forwardRef, useId, useState } from "react";
import { ReactComponent as ExclamationCircleSolid } from "@app/assets/icons/exclamation-circle-solid.svg";
import { ReactComponent as MinusIcon } from "@app/assets/icons/minus-circle.svg";
import { ReactComponent as PlusIcon } from "@app/assets/icons/plus-circle.svg";
import { useInputNumberClasses } from "./use-input-number-classes";
import { InputNumberProps, InputNumberSize } from "./input-number.type";

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (
    {
      lable,
      error,
      fullWidth,
      size = InputNumberSize.base,
      setValue,
      value,
      onBlur,
      hideErrorMassage = false,
      ...props
    },
    ref
  ) => {
    const inputId = useId();

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = (
      event: React.FocusEvent<HTMLInputElement, Element>
    ) => {
      setIsFocused(true);
    };

    const {
      inputClasses,
      inputWrapperClasses,
      buttonsMinusClasses,
      buttonsPlusClasses,
      buttonIconsClasses,
      errorMarkClasses,
    } = useInputNumberClasses(
      isFocused,
      size,
      error,
      fullWidth,
      hideErrorMassage
    );

    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
      setIsFocused(false);

      if (onBlur) {
        onBlur(event);
      }
    };

    const onHandleDecrement = () => {
      if (setValue && value) {
        setValue(value - 1);
      }
    };

    const onHandleIncrement = () => {
      if (setValue && value) {
        setValue(value + 1);
      }
    };

    return (
      <div>
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-900 mb-1 top "
        >
          {lable}
        </label>
        <div className={inputWrapperClasses}>
          <button className={buttonsMinusClasses} onClick={onHandleDecrement}>
            <MinusIcon className={buttonIconsClasses} />
          </button>
          <input
            className={inputClasses}
            id={inputId}
            ref={ref}
            {...props}
            type="number"
            value={value ?? 0}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {error && <ExclamationCircleSolid className={errorMarkClasses} />}
          <button className={buttonsPlusClasses} onClick={onHandleIncrement}>
            <PlusIcon className={buttonIconsClasses} />
          </button>
        </div>

        {!hideErrorMassage && (
          <span
            className="block text-sm text-red-600 mt-2"
            dangerouslySetInnerHTML={{ __html: error || "&nbsp" }}
          />
        )}
      </div>
    );
  }
);
