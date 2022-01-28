function Textarea({ className, ...props }) {
  return (
    <textarea
      className={`${className} border border-plum bg-transparent focus:ring-transparent focus:border-transparent`}
      {...props}
    />
  );
}

export default Textarea;
