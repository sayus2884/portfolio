function Button({ className, children, disabled, ...props }) {
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
}

export default Button;
