import { useState, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Dropdown from "../../components/Dropdown/Dropdown";

import NavigationContext from "../../contexts/NavigationContext";

const [PROJECTS, ABOUT, CONTACT] = [0, 1, 2];

function Nav({ className, ...props }) {
  const { current, navigateTo } = useContext(NavigationContext);

  const [active, setActive] = useState(PROJECTS);
  const options = [
    { name: "Projects", value: PROJECTS },
    { name: "About", value: ABOUT },
    { name: "Contact", value: CONTACT },
  ];

  const handleItemSelected = (item) => {
    navigateTo(item.value);
    setActive(item.value);
  };

  useEffect(() => {
    const selectedOption = options.find(({ value }) => value === current);
    setActive(selectedOption.value);
  }, [current]);

  return (
    <section className={`${className} flex flex-row  justify-between items-center z-50`}>
      <div className="flex space-x-8">
        <h1 className="font-header">Jonacius Villamor</h1>
      </div>

      <nav>
        <div className="hidden md:block lg:pr-20">
          <ul className="flex gap-15 justify justify-end font-bold">
            <li
              className={`text-20 hover:text-white hover:opacity-50 ${
                active === PROJECTS && "text-white"
              }`}>
              <button onClick={() => handleItemSelected(options[PROJECTS])}>Projects</button>
            </li>
            <li
              className={`text-20 hover:text-white hover:opacity-50 ${
                active === ABOUT && "text-white"
              }`}>
              <button onClick={() => handleItemSelected(options[ABOUT])}>About</button>
            </li>
            <li
              className={`text-20 hover:text-white hover:opacity-50 ${
                active === CONTACT && "text-white"
              }`}>
              <button onClick={() => handleItemSelected(options[CONTACT])}>Contact</button>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Nav;
