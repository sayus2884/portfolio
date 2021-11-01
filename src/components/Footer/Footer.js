import { cloneElement } from "react";
import { Container } from "./Footer.styles";
import { Envelope, LinkedinLogo, GithubLogo } from "phosphor-react";

const navItems = [
  { link: "#", image: <Envelope />, route: "#works" },
  {
    link: "https://linkedin.com/in/jonacius-villamor-9161a0223",
    image: <LinkedinLogo />,
    route: "#offer",
  },
  { link: "https://github.com/sayus2884", image: <GithubLogo />, route: "#tools" },
];

function Footer({ children }) {
  const iconProps = {
    className: "h-25 w-25 text-moonlight",
  };

  return (
    <footer className="flex h-16 bg-midnight w-full text-white items-center justify-between px-55 border-t border-white">
      <p className="text-20">© 2021 Jonacius Villamor</p>
      <ul className="flex items-center gap-22">
        {navItems.map((item, i) => (
          <li key={i}>
            <a href={item.link} target="_blank" rel="noreferrer" className="cursor-pointer">
              {cloneElement(item.image, iconProps)}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
