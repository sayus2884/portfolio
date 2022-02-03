import { useState, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Dropdown from "../../components/Dropdown/Dropdown";

import NavigationContext from "../../contexts/NavigationContext";

const [PROJECTS, ABOUT, CONTACT] = ["/", "/about", "/contact"];

function Nav({ className, ...props }) {
  const dropdownNav = useRef();
  const { route } = useRouter();
  const { current, navigateTo } = useContext(NavigationContext);

  const [active, setActive] = useState(PROJECTS);
  const options = [
    { name: "Projects", value: 0 },
    { name: "About", value: 1 },
    { name: "Contact", value: 2 },
  ];

  const handleItemSelected = (item) => {
    navigateTo(item.value);
  };

  useEffect(() => {
    const selectedOption = options.find(({ value }) => value === current);
    dropdownNav.current.dropdown.setSelectedItem(selectedOption);
  }, [current]);

  return (
    <section className={`${className} flex flex-row py-20 px-30 justify-between items-center`}>
      <div className="flex space-x-8 text-apple">
        <h1 className="font-header">Jonacius Villamor</h1>
        <span>|</span>
        <p>Fullstack Web Developer</p>
      </div>

      <nav>
        <Dropdown
          ref={dropdownNav}
          className={"text-chocolate min-w-[120px]"}
          options={options}
          onItemSelected={handleItemSelected}
          defaultOption={options[0]}
        />
      </nav>
    </section>
  );
}

export default Nav;
