import React, { useEffect } from "react";
import { GithubLogo, Browser } from "phosphor-react";

import { motion, useAnimation } from "framer-motion";
import { VARIANTS, easeInRightVariants, staggerOptions } from "../../utils/animations";
import { useInView } from "react-intersection-observer";

import Button from "../Button/Button";
import { ImageBanner } from "./Project.styles";

export interface ProjectProps {
  title: string;
  imageUrl?: string;
  technologies: string[];
  role: string;
  description: string[];
  challenge: string;
  process: string[];
  problems: string[];
  solutions: string[];
  takeAways: string[];
  github: string;
  link: string;
}

interface Props extends ProjectProps {
  className?: string;
}

const Project: React.FC<Props> = ({
  className,
  imageUrl,
  title,
  description,
  challenge,
  problems,
  process,
  solutions,
  takeAways,
  technologies,
  link,
  github,
  role,
  ...props
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start(VARIANTS.OPEN);
    }
    if (!inView) {
      controls.start(VARIANTS.CLOSED);
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="flex flex-col gap-20 overflow-auto h-inherit pb-40"
      variants={staggerOptions({ delay: 0.4 })}
      initial={VARIANTS.CLOSED}
      animate={VARIANTS.OPEN}
      ref={ref}
      {...props}>
      <div className="flex flex-col items-center">
        <ImageBanner
          className="h-[200px] sm:h-[300px] md:h-[450px] lg:h-[520px] w-full"
          imageUrl={imageUrl}>
          <motion.h2
            className="hidden sm:block font-header tracking-widest text-22 md:text-25 lg:text-32 text-white/80 py-10 px-15 mt-30 lg:py-15 lg:px-30 w-fit bg-blackberry rounded-r-md shadow-md"
            variants={easeInRightVariants}>
            {title}
          </motion.h2>
        </ImageBanner>

        <div className="flex flex-col gap-25 px-20 md:px-45 pt-20 max-w-650 justify-center">
          <div className="flex flex-col gap-10">
            <motion.h2
              className="sm:hidden font-header tracking-widest text-22 sm:text-blackberry"
              variants={easeInRightVariants}>
              {title}
            </motion.h2>
            <motion.p className="text-[14px] opacity-70" variants={easeInRightVariants}>
              Made with {technologies.join(", ")}
            </motion.p>
          </div>

          <motion.div variants={easeInRightVariants}>
            <h3 className="text-22 font-bold mb-10">Overview</h3>

            <div className="flex flex-col gap-20">
              {description.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </motion.div>

          <div className="flex gap-10 w-fit">
            {link && (
              <Button className="w-fit" variants={easeInRightVariants}>
                <a href={link} target="_blank" rel="noreferrer" className="flex gap-8 items-center">
                  <Browser weight="bold" />
                  <span>Demo</span>
                </a>
              </Button>
            )}

            {github && (
              <Button className="w-fit" variants={easeInRightVariants}>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-8 items-center">
                  <GithubLogo weight="bold" />
                  <span>Source</span>
                </a>
              </Button>
            )}
          </div>

          <motion.div className="border-t border-white/50 pt-40" variants={easeInRightVariants}>
            <h3 className="text-22 font-bold mb-10">Role</h3>

            <p className="flex flex-col gap-20">{role}</p>
          </motion.div>

          <motion.div variants={easeInRightVariants}>
            <h3 className="text-22 font-bold mb-10">The Challenge</h3>

            <p className="flex flex-col gap-20">{challenge}</p>
          </motion.div>

          <div>
            <motion.h3 className="text-22 font-bold mb-10" variants={easeInRightVariants}>
              Thought Process
            </motion.h3>

            <div className="flex flex-col gap-20">
              {process.map((text, i) => (
                <motion.p key={i} variants={easeInRightVariants}>
                  {text}
                </motion.p>
              ))}
            </div>
          </div>

          <div>
            <motion.h3 className="text-22 font-bold mb-10" variants={easeInRightVariants}>
              Problems Encountered
            </motion.h3>

            <div className="flex flex-col gap-10">
              <ul className="list-disc list-inside">
                {problems.map((text, i) => (
                  <motion.li key={i} variants={easeInRightVariants}>
                    {text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <motion.h3 className="text-22 font-bold mb-10" variants={easeInRightVariants}>
              Solutions
            </motion.h3>

            <div className="flex flex-col gap-20">
              {solutions.map((text, i) => (
                <motion.p key={i} variants={easeInRightVariants}>
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
