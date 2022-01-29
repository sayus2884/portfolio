import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const [PROJECTS, ABOUT, CONTACT] = ["/", "/about", "/contact"];

function Nav({ className, ...props }) {
  const { route } = useRouter();
  const [active, setActive] = useState(PROJECTS);

  useEffect(() => {
    setActive(route);
  }, [route]);

  return (
    <section className={`${className} flex flex-row py-20 px-45 justify-between items-center`}>
      <div className="flex space-x-8 text-apple">
        <h1 className="font-header">Jonacius Villamor</h1>
        <span>|</span>
        <p>Fullstack Web Developer</p>
      </div>

      <nav>
        <ul className="flex gap-15 justify justify-end text-blackberry font-bold">
          <li
            className={`text-20 hover:text-white hover:opacity-50 ${
              active === PROJECTS && "text-white"
            }`}>
            <Link href="/">Projects</Link>
          </li>
          <li
            className={`text-20 hover:text-white hover:opacity-50 ${
              active === ABOUT && "text-white"
            }`}>
            <Link href="/about">About</Link>
          </li>
          <li
            className={`text-20 hover:text-white hover:opacity-50 ${
              active === CONTACT && "text-white"
            }`}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav;
