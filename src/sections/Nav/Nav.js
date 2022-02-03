import { useState, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Dropdown from "../../components/Dropdown/Dropdown";

import NavigationContext from "../../contexts/NavigationContext";

const [PROJECTS, ABOUT, CONTACT] = [0, 1, 2];

function Nav({ className, ...props }) {
  const dropdownNav = useRef();
  const { route } = useRouter();
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
    dropdownNav.current.dropdown.setSelectedItem(selectedOption);
    setActive(selectedOption.value);
  }, [current]);

  return (
    <section className={`${className} flex flex-row py-20 px-30 justify-between items-center`}>
      <div className="flex space-x-8 text-chocolate">
        <h1 className="font-header">Jonacius Villamor</h1>
        <span>|</span>
        <p>Fullstack Web Developer</p>
      </div>

      <nav>
        <Dropdown
          ref={dropdownNav}
          className={"text-chocolate min-w-[120px] md:hidden"}
          options={options}
          onItemSelected={handleItemSelected}
          defaultOption={options[PROJECTS]}
        />

        <div className="hidden md:block lg:pr-20">
          <ul className="flex gap-15 justify justify-end text-blackberry font-bold">
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
