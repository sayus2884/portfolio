import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../../components/Button/Button";

function Nav({ className, ...props }) {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);
  const routes = [
    { name: "Works", route: "/works" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
  ];

  const handleNavigation = (route) => {
    setActive(route);
    router.push(route);
  };

  useEffect(() => {
    routes.forEach(({ route }) => {
      router.prefetch(route);
    });
  }, []);

  return (
    <section
      className={`${className} flex flex-row justify-between items-center z-50 md:px-20 lg:px-60 xl:px-80`}>
      <div className="flex space-x-8">
        <button onClick={() => handleNavigation("/")}>
          <h1 className="font-header cursor-pointer text-16">Jonacius Villamor</h1>
        </button>
      </div>

      <nav>
        <ul className="flex gap-30 lg:gap-40 justify justify-end font-bold items-center">
          {routes.map(({ name, route }, i) => (
            <li key={i}>
              <button
                className={`tracking-wide text-16  hidden md:block ${
                  active === route ? "text-red-500" : "hover:text-white hover:opacity-70"
                }`}
                onClick={() => handleNavigation(route)}>
                {name}
              </button>
            </li>
          ))}
          <li>
            <Button>Resume</Button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav;
