function Card({ children, className, ...props }) {
  return <div className={`${className} bg-blackberry w-full max-w-card`}>{children}</div>;
}

export default Card;
