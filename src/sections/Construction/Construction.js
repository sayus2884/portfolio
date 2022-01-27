import Image from "next/image";

function Construction(props) {
  return (
    <section
      {...props}
      className="bg-code-image bg-cover justify-center items-center pt-16 h-screen flex">
      <p className="text-white">
        My portfolio is currently under construction. In the mean time, feel free to look into one
        my works and dive into the world of Vtubers!
      </p>
    </section>
  );
}

export default Construction;
