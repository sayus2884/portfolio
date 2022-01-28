function Input({ className, ...props }) {
  return (
    <input
      className={`${className} border border-plum bg-transparent focus:ring-transparent focus:border-transparent`}
      {...props}
    />
  );
}

export default Input;
