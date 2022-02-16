import { useState, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Dropdown from "../../components/Dropdown/Dropdown";

import NavigationContext from "../../contexts/ProjectNavigationContext";

const [PROJECTS, ABOUT, CONTACT] = ["/works", "/about", "/contact"];

function Nav({ className, ...props }) {
  const router = useRouter();
  const [active, setActive] = useState(PROJECTS);
  const routes = [
    { name: "Works", route: "/works" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
  ];

  const handleNavigation = (route) => {
    setActive(route);
    router.push(route);
  };

  return (
    <section
      className={`${className} flex flex-row justify-between items-center z-50 md:px-20 lg:px-40 xl:px-60`}>
      <div className="flex space-x-8">
        <Link href={"/"}>
          <h1 className="font-header cursor-pointer">Jonacius Villamor</h1>
        </Link>
      </div>

      <nav>
        <div className="hidden md:block">
          <ul className="flex gap-30 justify justify-end font-bold">
            {routes.map(({ name, route }, i) => (
              <li
                key={i}
                className={`text-18 ${
                  active === route ? "text-plum" : "hover:text-white hover:opacity-50"
                }`}>
                <button className="tracking-wide" onClick={() => handleNavigation(route)}>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Nav;
