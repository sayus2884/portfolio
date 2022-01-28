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
      <div className="flex relative items-center justify-center">
        <Sun sunSize={sunSize} className="absolute object-contain" src="/images/logo.svg" />
        <Rays
          raySize={raySize}
          className="absolute animate-spin-rays object-contain"
          src="/images/rays.svg"
        />
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="relative animate-spin-earth">
            <Earth
              earthSize={earthSize}
              className="aspect-square object-contain"
              src="/images/earth.svg"
            />
            <div className="absolute flex inset-0 items-center justify-center">
              <Moon
                moonSize={moonSize}
                moonOffset={moonOffset}
                className="absolute object-contain animate-spin-moon"
                src="/images/moon.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orbit;
