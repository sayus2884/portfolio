import { useState, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Dropdown from "../../components/Dropdown/Dropdown";

import NavigationContext from "../../contexts/ProjectNavigationContext";

const [PROJECTS, ABOUT, CONTACT] = [0, 1, 2];

function Nav({ className, ...props }) {
  const router = useRouter();
  const [active, setActive] = useState(PROJECTS);
  const routes = [
    { name: "Works", route: "/works" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
  ];

  return (
    <section className={`${className} flex flex-row  justify-between items-center z-50`}>
      <div className="flex space-x-8">
        <Link href={"/"}>
          <h1 className="font-header cursor-pointer">Jonacius Villamor</h1>
        </Link>
      </div>

      <nav>
        <div className="hidden md:block lg:pr-20">
          <ul className="flex gap-15 justify justify-end font-bold">
            {routes.map(({ name, route }, i) => (
              <li
                key={i}
                className={`text-20 hover:text-white hover:opacity-50 ${
                  active === PROJECTS && "text-white"
                }`}>
                <Link href={route}>
                  <button>{name}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Nav;
