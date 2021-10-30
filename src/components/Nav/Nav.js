import Link from "next/link";
import { Container } from "./Nav.styles";

const navItems = [
  { name: "Works", route: "#works" },
  { name: "What I Offer", route: "#offer" },
  { name: "Tools", route: "#tools" },
];

function Nav() {
  // <li className="border-r pr-10">
  // <a className="cursor-pointer">Dark</a>
  // </li>
  return (
    <header className="flex fixed h-16 bg-midnight w-full text-white items-center justify-between px-55 z-50 shadow">
      <h1 className="text-32 font-thin">Jonacius Villamor</h1>
      <nav>
        <ul className="flex items-center gap-40">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link href={item.route} passHref>
                <a className="cursor-pointer">{item.name}</a>
              </Link>
            </li>
          ))}

          <li>
            <button className="text-moonlight border border-moonlight px-10 py-8 rounded">
              <Link href="#contact" passHref>
                <a className="cursor-pointer">Get In Touch</a>
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
