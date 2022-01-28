function Button({ className, children, ...props }) {
  return (
    <button
      className={`${className} border border-plum text-plum px-15 py-10 rounded-sm hover:bg-plum hover:text-white`}
      {...props}>
      {children}
    </button>
  );
}

export default Button;
