import { ComponentProps, FC, useId } from "react";

interface RadionInputProps {
  value: ComponentProps<"input">["value"];
  label: string;
  name: string;
  onChange?: ComponentProps<"input">["onChange"];
  defaultChecked?: ComponentProps<"input">["defaultChecked"];
}

export const RadionInput: FC<RadionInputProps> = ({
  label,

  ...props
}) => {
  const radioId = useId();

  return (
    <div>
      <input type="radio" id={radioId} className="hidden peer" {...props} />

      <label
        className="relative before:cotent-[''] before:w-4 before:h-4 before:rounded-full before:border before:inline-block before:mr-3 
        before:bg-white before:border-gray-300 before:box-border 
        before:peer-checked:border-amber-400 before:peer-checked:border-5 before:transition-all before:relative before:top-0.5"
        htmlFor={radioId}
      >
        {label}
      </label>
    </div>
  );
};
