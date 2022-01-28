import { useContext, useMemo, useCallback, useEffect, memo } from "react";
import Image from "next/image";
import Link from "next/link";

function Nav({ className, ...props }) {
  return (
    <section className={`${className} `}>
      <nav className="py-20 px-45">
        <ul className="flex gap-10 justify text-white justify-end">
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Nav;
