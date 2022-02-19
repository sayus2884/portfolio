import React from "react";

interface Props
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
}

const Input: React.FC<Props> = ({ className, ...props }) => {
  return (
    <input
      className={`${className} border border-red-500 bg-black/20 focus:ring-transparent focus:border-transparent`}
      {...props}
    />
  );
};

export default Input;
