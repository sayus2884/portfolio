import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ className, children, disabled = false, ...props }) => {
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
