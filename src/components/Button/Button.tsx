import React from "react";
import { ThemedStyledFunction } from "styled-components";
import { CustomButton, ITheme } from "./Button.styles";

interface Props
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    ITheme {
  className?: string;
  disabled?: boolean;
  imageUr?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  className,
  children,
  disabled = false,
  onClick,
  imageUrl,
  ...props
}) => {
  if (imageUrl)
    return (
      <CustomButton
        className={`${className}`}
        onClick={onClick}
        disabled={disabled}
        imageUrl={imageUrl}>
        {children}
      </CustomButton>
    );

  return (
    <button
      className={`${className} border border-plum text-plum px-15 py-10 rounded-sm ${
        !disabled && "hover:bg-plum hover:text-white"
      } ${disabled && "cursor-default"}`}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
