import { Sun, Rays, Earth, Moon } from "./Orbit.styles";

function Orbit({
  children,
  sunSize = "100",
  raySize = "150",
  earthSize = "400",
  moonSize = "100",
  moonOffset = "15",
  className,
}) {
  return (
    <div className={`${className}`}>
      <div className="relative h-full flex flex-col items-center justify-center">
        <Sun className="absolute" />
        <Rays className="absolute animate-spin-rays" />
        <div className="absolute h-full w-full flex flex-col items-center justify-center animate-spin-earth">
          <Earth className="absolute" />
          <Moon className="absolute animate-spin-moon" />
        </div>
      </div>
    </div>
  );
}

export default Orbit;
