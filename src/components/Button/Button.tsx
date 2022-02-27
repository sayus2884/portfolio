import React from "react";
import { ForwardRefComponent, HTMLMotionProps, motion, Variants } from "framer-motion";
import { CustomButton, ITheme } from "./Button.styles";

interface Props
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    ITheme {
  className?: string;
  disabled?: boolean;
  variants?: Variants;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  className,
  children,
  disabled = false,
  onClick,
  imageurl,
  variants,
  ...props
}) => {
  if (imageurl)
    return (
      <CustomButton
        className={`${className}`}
        onClick={onClick}
        disabled={disabled}
        imageurl={imageurl}
        variants={variants}>
        {children}
      </CustomButton>
    );

  return (
    <motion.button
      variants={variants}
      className={`${className} border border-red-500 bg-black/20 text-red-500 px-15 py-5 rounded-sm ${
        !disabled && "hover:bg-red-500 hover:text-white"
      } ${disabled && "cursor-default"}`}
      disabled={disabled}>
      {children}
    </motion.button>
  );
};

export default Button;
