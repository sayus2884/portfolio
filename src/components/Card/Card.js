function Card({ children, className, ...props }) {
  return (
    <div className={`${className} bg-blackberry w-full max-w-card rounded shadow-2xl`}>
      {children}
    </div>
  );
}

export default Card;
