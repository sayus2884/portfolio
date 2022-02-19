import React from "react";
import Link from "next/link";
import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";

interface Props {
  className?: string;
  size?: number;
}

const [github, linkedin, contact] = [
  "https://github.com/sayus2884",
  "https://www.linkedin.com/in/jonacius-villamor-9161a0223/",
  "/contact",
];

const Socials: React.FC<Props> = ({ className, size = 20, ...props }) => {
  return (
    <ul className={`${className} flex`} {...props}>
      <li>
        <a className="hover:text-red-500" href={github} target="_blank">
          <GithubLogo size={size} />
        </a>
      </li>
      <li>
        <a className="hover:text-red-500" href={linkedin} target="_blank">
          <LinkedinLogo size={size} />
        </a>
      </li>
      <li>
        <Link href={contact}>
          <a className="hover:text-red-500">
            <Envelope size={size} />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
