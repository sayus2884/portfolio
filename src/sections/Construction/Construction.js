import Image from "next/image";

function Construction(props) {
  return (
    <section
      {...props}
      className="justify-center items-center pt-16 h-screen flex relative overflow-hidden">
      <div className="absolute z-10">
        <div className="flex relative items-center justify-center h-500 w-500">
          <img className="absolute h-max w-max" src="/images/logo.svg" />
          <img className="absolute h-max w-max animate-spin-rays" src="/images/rays.svg" />
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="relative animate-spin-earth">
              <img src="/images/earth.svg" />
              <div className="absolute flex inset-0 items-center justify-center">
                <img className="absolute -bottom-4 animate-spin-moon" src="/images/moon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-white z-50 w-300">
        My portfolio is currently under construction. In the mean time, feel free to look into one
        my works and dive into the world of Vtubers!
      </p>
    </section>
  );
}

export default Construction;
