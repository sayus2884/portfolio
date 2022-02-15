import { useState, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const [PROJECTS, ABOUT, CONTACT] = [0, 1, 2];

import React from "react";

interface Props {
  className?: string;
}

const NavMobile: React.FC<Props> = ({ className, ...props }) => {
  return (
    <section className={`${className} py-20 px-30 justify-between items-center`}>
      <nav>
        <ul className="grid grid-flow-col auto-cols-fr text-center">
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </section>
  );
};

export default NavMobile;
