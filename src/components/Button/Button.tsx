import React from "react";
import { CustomButton, ITheme } from "./Button.styles";

interface Props
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    ITheme {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ className, children, disabled = false, imageUrl, onClick }) => {
  return (
    <CustomButton
      className={`${className}`}
      disabled={disabled}
      imageUrl={imageUrl}
      onClick={onClick}>
      {children}
    </CustomButton>
  );
};

export default Button;
