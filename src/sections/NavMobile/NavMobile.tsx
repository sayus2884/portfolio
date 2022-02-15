import React from "react";
import Link from "next/link";
import { Kanban, User, Envelope } from "phosphor-react";

interface Props {
  className?: string;
}

const routes = [
  { name: "Works", route: "/works", Icon: Kanban },
  { name: "About", route: "/about", Icon: User },
  { name: "Contact", route: "/contact", Icon: Envelope },
];

const NavMobile: React.FC<Props> = ({ className, ...props }) => {
  return (
    <section className={`${className} justify-between items-center`} {...props}>
      <nav>
        <ul className="grid grid-flow-col auto-cols-fr text-center">
          {routes.map(({ name, route, Icon }, i) => (
            <li key={i} className="border-r-2 border-blackberry last:border-none">
              <Link href={route}>
                <button className="flex items-center py-20 px-30 h-full w-full hover:bg-white/20 gap-1">
                  <Icon size={24} />
                  {name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default NavMobile;
