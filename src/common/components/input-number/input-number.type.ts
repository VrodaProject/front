import { ComponentProps } from "react";

export enum InputNumberSize {
  sm = "sm",
  base = "base",
}

export interface InputNumberProps {
  onChange?: ComponentProps<"input">["onChange"];
  onBlur?: ComponentProps<"input">["onBlur"];
  value?: number;
  name?: ComponentProps<"input">["name"];
  disabled?: ComponentProps<"input">["disabled"];
  readOnly?: ComponentProps<"input">["readOnly"];
  lable: string;
  placeholder?: string;
  error?: string;
  fullWidth?: boolean;
  setValue?: (value: number) => void;
  size?: keyof typeof InputNumberSize;
  hideErrorMassage?: boolean;
}
