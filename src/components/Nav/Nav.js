import { Container } from "./Nav.styles";

const navItems = [
  { name: "Works", route: "#works" },
  { name: "WhatIOffer", route: "#offer" },
  { name: "Tools", route: "#tools" },
];

function Nav() {
  return (
    <header className="flex fixed h-16 bg-midnight w-full text-white items-center justify-between px-55">
      <div>Jonacius Villamor</div>
      <nav>
        <ul className="flex items-center gap-10">
          <li className="border-r pr-10">
            <a className="cursor-pointer">Dark</a>
          </li>

          {navItems.map((item, i) => (
            <li key={i}>
              <a className="cursor-pointer">{item.name}</a>
            </li>
          ))}

          <li>
            <button className="text-moonlight border border-moonlight px-10 py-8 rounded">
              <a className="cursor-pointer">Get In Touch</a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
