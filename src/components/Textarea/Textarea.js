function Textarea({ className, ...props }) {
  return (
    <textarea
      className={`${className} border border-red-500 bg-black/20 focus:ring-transparent focus:border-transparent`}
      {...props}
    />
  );
}

export default Textarea;
