function Card({ children, className, ...props }) {
  return <div className={`${className} bg-blackberry w-full`}>{children}</div>;
}

export default Card;
