import React from "react";
import Link from "next/link";
import { FileArrowDown, GithubLogo, LinkedinLogo } from "phosphor-react";

interface Props {
  className?: string;
  size?: number;
}

const [github, linkedin, resume] = [
  "https://github.com/sayus2884",
  "https://www.linkedin.com/in/jonacius-villamor-9161a0223/",
  "./Jonacius_Villamor_Web_Dev.docx",
];

const Socials: React.FC<Props> = ({ className, size = 20, ...props }) => {
  return (
    <ul className={`${className} flex`} {...props}>
      <li>
        <a href={github} target="_blank">
          <GithubLogo size={size} />
        </a>
      </li>
      <li>
        <a href={linkedin} target="_blank">
          <LinkedinLogo size={size} />
        </a>
      </li>
      <li>
        <a href={resume} download>
          <FileArrowDown size={size} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
