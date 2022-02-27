import React from "react";
import Link from "next/link";
import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";
import { motion } from "framer-motion";
import { easeInRightVariants } from "../../utils/animations";

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
      <motion.li variants={easeInRightVariants}>
        <a className="hover:text-red-500" href={github} target="_blank">
          <GithubLogo size={size} />
        </a>
      </motion.li>
      <motion.li variants={easeInRightVariants}>
        <a className="hover:text-red-500" href={linkedin} target="_blank">
          <LinkedinLogo size={size} />
        </a>
      </motion.li>
      <motion.li variants={easeInRightVariants}>
        <Link href={contact}>
          <a className="hover:text-red-500">
            <Envelope size={size} />
          </a>
        </Link>
      </motion.li>
    </ul>
  );
};

export default Socials;
