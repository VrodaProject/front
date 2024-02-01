import { forwardRef } from "react";
import { RadionInput } from "../radio-input/radio-input.component";
import { ControllerRenderProps } from "react-hook-form";

interface RadionGroupProps extends ControllerRenderProps<any, any> {
  options: {
    label: string;
    value: string;
  }[];
  label?: string;
}

export const RadionGroup = forwardRef<HTMLDivElement, RadionGroupProps>(
  ({ options, name, onChange, value, label }, ref) => {
    return (
      <div className="pb-6 " ref={ref}>
        <div className="text-gray-900 text-sm font-medium mb-3">{label}</div>
        <div>
          {options.map((option) => (
            <RadionInput
              key={`radio-input-${name}-${option.value}`}
              {...option}
              name={name}
              onChange={onChange}
              defaultChecked={option.value === value}
            />
          ))}
        </div>
      </div>
    );
  }
);
