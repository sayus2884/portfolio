import React from "react";

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const Card: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <div className={`${className} w-full max-w-card rounded shadow-2xl`} {...props}>
      {children}
    </div>
  );
};

export default Card;
